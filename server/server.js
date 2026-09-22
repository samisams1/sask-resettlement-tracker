// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// 1. Load hidden environment parameters immediately at the very top of execution memory
require('dotenv').config(); 

//const db = require('./data/mockDb'); 
const Milestone = require('./models/Milestone');
const app = express();
 

// 2. Extract configuration constants safely out of system memory using process.env
const PORT = process.env.PORT || 5050; // Fallback to 5050 if PORT is undefined
const MONGO_URI = process.env.MONGO_URI;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// 3. 🎯 Execute the asynchronous Mongoose connection pipeline
mongoose.connect(MONGO_URI)
  .then(() => console.log("🟢 Local MongoDB Connected Successfully on Port 27017!"))
  .catch((err) => console.error("🔴 Database connection pipeline crash error:", err));

// --- API ENDPOINT ROUTE CHANNELS ---

// Verification Ping Gate
app.get("/api/ping", (req, res) => {
  res.status(200).json({ message: "API server is running live!" });
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
