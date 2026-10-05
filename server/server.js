// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // 🚀 Ensure this line exists inside your User.js file!
const jwt = require('jsonwebtoken');

// 1. Load hidden environment parameters immediately at the very top of execution memory
require('dotenv').config(); 

//const db = require('./data/mockDb'); 
const Milestone = require('./models/Milestone');
const app = express();
 const authGuard = require('./middleware/authMiddleware'); 

// 2. Extract configuration constants safely out of system memory using process.env
const PORT = process.env.PORT || 5050; // Fallback to 5050 if PORT is undefined
const MONGO_URI = process.env.MONGO_URI;

app.use(cors({ origin: ['http://localhost:5173','http://localhost:5174'] }));
app.use(express.json());

// 3. 🎯 Execute the asynchronous Mongoose connection pipeline
mongoose.connect(MONGO_URI)
  .then(() => console.log("🟢 Local MongoDB Connected Successfully on Port 27017!"))
  .catch((err) => console.error("🔴 Database connection pipeline crash error:", err));
const User = require('./models/User');
// --- API ENDPOINT ROUTE CHANNELS ---

app.post("/api/auth/register",authGuard, async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password properties are mandatory." });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "An account with this email is already registered." });
    }

    // When .create() calls 'save' under the hood, our pre-save hook triggers automatically!
    const newUser = await User.create({
      email,
      password,
      role: role || "Applicant"
    });
    return res.status(201).json({
      message: "User account generated successfully.",
      user: { _id: newUser._id, email: newUser.email, role: newUser.role }
    });

  } catch (err) {
   // return res.status(500).json({ error: "Failed to persist user profile down to database collection storage." });
// 1. Log the actual error to your terminal so you can read it!
    console.error("REGISTRATION ERROR DETECTED:", err);

    // 2. Return the real error message to Postman/Frontend temporarily
    return res.status(500).json({ 
      error: "Internal Server Error", 
      details: err.message 
    });  
}
});
// Verification Ping Gate
app.get("/api/ping", (req, res) => {
  res.status(200).json({ message: "API server is running live!" });
});
// Day 18: User Login & Token Issuance Route
// server.js (Verify this complete block inside your file)
app.post("/api/auth/login",authGuard, async (req, res) => {
  try {
    const { email, password } = req.body;

    // A. Input Verification Guard
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password fields are mandatory." });
    }

    // B. Query database collection records
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid login credentials parameters." });
    }

    // C. Cryptographic comparison check via bcrypt module
    // 🚀 Ensure 'bcrypt' matches your required variable at the top of server.js!
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid login credentials parameters." });
    }

    // D. Sign and instantiate the stateless token
    // 🚀 Ensure process.env.JWT_SECRET matches your .env file variable string exactly!
  /*  const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1d' }
    );*/
const token = jwt.sign(
      { id: user._id, role: user.role }, 
      'super_secret_saskatchewan_immigration_crypto_key_2026', 
      { expiresIn: '1d' }
    );
    // E. Return clean success payload data block
    return res.status(200).json({
      message: "Authentication successful.",
      token,
      user: { _id: user._id, email: user.email, role: user.role }
    });

  } catch (err) {
    // 🕵️‍♂️ Senior Dev Tip: Temporary debug trace log line to see the exact root crash cause inside your terminal window
    console.error("CRITICAL AUTH LOG ERROR DETECTED:", err);
    return res.status(500).json({ error: "Authentication transaction pipeline failure." });
  }
});

// Milestones GET Data Pathway
app.get("/api/milestones", async(req, res) => {
    try{
      const records = await Milestone.find();
      return res.status(200).json(records);
    }catch(err) {
return res.status(500).json({error:"Failed to retrive database documents"})
    }
});

// Milestones POST Ingestion Pathway
app.post("/api/milestones", async (req, res) => {
  try {
    const { name } = req.body;
    
    // Strict Validation Guard
    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Milestone name property string is mandatory." });
    }

    // 🚀 Fixed: Uses the official Mongoose driver constructor query parameters
    const newRecord = await Milestone.create({
      name: name,
      status: "Pending" // Automatically falls back to schema defaults as well
    });
  
    return res.status(201).json(newRecord);
  } catch (err) {
    return res.status(500).json({ error: "Internal Cloud Database execution timeout." });
  }
});

// Milestones DELETE Pathway
app.delete("/api/milestones/:id", async (req, res) => {
  try {
    const targetedId = req.params.id;
    
    // 🎯 Day 15 Resolution: Erase the document permanently from disk storage cells
    await Milestone.findByIdAndDelete(targetedId);
    
    return res.status(200).json({ 
      message: `Milestone with ID ${targetedId} successfully deleted from MongoDB collections.` 
    });
  } catch (err) {
    return res.status(500).json({ error: "Failed to execute database record deletion." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend Express engine is listening live on http://localhost:${PORT}`);
});
