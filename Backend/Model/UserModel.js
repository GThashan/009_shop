import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
      userName: {
        type: String,
        required: [true, "user name is required"],
      },
      email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
      },
      password: {
        type: String,
        required: [true, "password is required"],
      },
     
    },
    { timestamps: true }
  );
  
  const Usermodel = mongoose.model("User",UserSchema);
  export {Usermodel as User};
