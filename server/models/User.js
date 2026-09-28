// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "User email string layout parameters are mandatory."],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Password string data properties are mandatory."]
  },
  role: {
    type: String,
    enum: ["Applicant", "Consultant"],
    default: "Applicant"
  }
});

// The automated Mongoose interceptor hook
UserSchema.pre('save', async function (next) {
  // Guard clause: Only hash the string if it is new or intentionally modified
  if (!this.isModified('password')) return next();

  try {
    // 1. Instantiate a randomized data noise profile using 10 salt rounds
    const salt = await bcrypt.genSalt(10);

    // 2. Transmute plain text down into a highly secure cryptographic hash block
    this.password = await bcrypt.hash(this.password, salt);

    next(); // Relinquish execution tracking parameters back to the save queue
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("User", UserSchema);
