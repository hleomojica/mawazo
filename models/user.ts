import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    unique: [true, "username Already exist!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  email: {
    type: String,
    unique: [true, "Email Already exist!"],
    required: [true, "Email is required!"],
  },
  image: { type: String },
});

// Search for existing model with the same name before trying to create a new one
const User = models.User || model("User", UserSchema);

export default User;
