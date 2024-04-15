import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter a username"],
    },
    lastname: {
      type: String,
      required: [true, "Please enter a username"],
    },
    regNumber: {
      type: String,
      required: [true, "Please enter a username"],
      unique: true,

    },
    role: {
      type: String,
      enum: ['teacher', 'admin', 'student', 'parent', 'superadmin'],
      default: 'user' // Default role is 'user'
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExp: Date,
    verifyToken: String,
    verifyTokenExp: Date,
  }
);

// This method will be called before saving the user to the database
userSchema.pre("save", async function (next) {
  // If the password is not modified, then call the next middleware
  if (!this.isModified("password")) {
    next();
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// This method will be called when comparing the password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const userModel =
  mongoose.models.User || mongoose.model("User", userSchema);
