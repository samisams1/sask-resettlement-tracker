// models/Milestone.js
const mongoose = require('mongoose');

// 1. Define the strict layout rules for a milestone document row
const MilestoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A milestone name identifier string is mandatory."],
    trim: true
  },
  status: {
    type: String,
    enum: ["Pending", "Approved"],
    default: "Pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// 2. Compiled and exported seamlessly as a modular database operator entry point
module.exports = mongoose.model("Milestone", MilestoneSchema);
