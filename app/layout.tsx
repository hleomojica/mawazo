import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mawazo Wall",
  description: "Discover and share ideas with the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
