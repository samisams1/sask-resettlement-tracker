// server.js
const express = require('express');
const cors = require('cors'); 
const db = require('./data/mockDb'); 

const app = express();
const PORT = 5050; // Dynamic Port matching your MacBook AirPlay configurations

// Enable parsing frameworks and network clearance flags
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json()); // 🚀 Essential digital box-cutter middleware for POST processing

// 1. GET Verification Ping Endpoint
app.get("/api/ping", (req, res) => {
  res.status(200).json({ message: "API server is running live!" });
});

// 2. GET Milestones Data Array Pathway
app.get("/api/milestones", (req, res) => {
  res.status(200).json(db.getMilestones());
});

// 3. POST Data Ingestion Endpoint
app.post("/api/milestones", (req, res) => {
  const { name } = req.body;

  // Validation Guard
  if (!name || name.trim() === "") {
    return res.status(400).json({ error: "Milestone name property string is mandatory." });
  }

  const targetMilestone = {
    id: Date.now(), 
    name: name,
    status: "Pending" 
  };

  const savedItem = db.addMilestone(targetMilestone);

  // Your Conditional Verification Logic Block
  if (savedItem) {
    return res.status(201).json(savedItem); // 201 = HTTP Created Success Status
  } else {
    return res.status(500).json({ error: "Internal Database execution timeout." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend Express engine is listening live on http://localhost:${PORT}`);
});
