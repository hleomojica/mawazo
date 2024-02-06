import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDb } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const sessionUser = await User.findOne({ email: token.email });
      if (session.user) {
        session.user.id = sessionUser.user._id.toString();
      }
      return session;
    },
    async signIn({ profile }): Promise<boolean> {
      try {
        await connectToDb();
        if (!profile) {
          return false;
        }
        const userExist = await User.findOne({
          email: profile.email,
        });

        if (!userExist) {
          await User.create({
            email: profile.email,
            username: profile.name?.replace(/\s/g, "").toLowerCase() || "",
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log("Error in signIn: ", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
