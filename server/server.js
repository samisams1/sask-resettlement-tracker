// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// 1. Load hidden environment parameters immediately at the very top of execution memory
require('dotenv').config(); 

const db = require('./data/mockDb'); 
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
app.get("/api/milestones", (req, res) => {
  res.status(200).json(db.getMilestones());
});

// Milestones POST Ingestion Pathway
app.post("/api/milestones", (req, res) => {
  const { name } = req.body;
  if (!name || name.trim() === "") {
    return res.status(400).json({ error: "Milestone name property string is mandatory." });
  }
  const targetMilestone = { id: Date.now(), name, status: "Pending" };
  const savedItem = db.addMilestone(targetMilestone);
  
  if (savedItem) {
    return res.status(201).json(savedItem);
  } else {
    return res.status(500).json({ error: "Internal Database execution timeout." });
  }
});

// Milestones DELETE Pathway
app.delete("/api/milestones/:id", (req, res) => {
  const targetedId = parseInt(req.params.id, 10);
  if (isNaN(targetedId)) {
    return res.status(400).json({ error: "Invalid milestone identification parameter." });
  }
  db.deleteMilestone(targetedId);
  return res.status(200).json({ 
    message: `Milestone with ID ${targetedId} has been successfully deleted from server memory.` 
  });
});

app.listen(PORT, () => {
  console.log(`Backend Express engine is listening live on http://localhost:${PORT}`);
});
