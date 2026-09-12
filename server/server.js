// server.js
const express = require('express');
const cors = require('cors'); 
const db = require('./data/mockDb'); 
const e = require('express');

const app = express();
const PORT = 5050; // Dynamic Port matching your MacBook AirPlay configurations

// Enable parsing frameworks and network clearance flags
app.use(cors({ origin: 'http://localhost:5174' }));
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
app.delete("/api/milestones/:id", (req, res) => {
  // Fixed 1 & 2: Parsed the dynamic URL parameter ID using correct spelling rules
  const targetedId = parseInt(req.params.id, 10);

  // Validation Guard: Ensure the ID is a valid mathematical number string token
  if (isNaN(targetedId)) {
    return res.status(400).json({ error: "Invalid milestone identification parameter." });
  }

  // Fixed 4: Trigger our database data layer filter query to remove the item from server files
  db.deleteMilestone(targetedId);

  // Fixed 3: Returned a clean status 200 execution payload with properly closed syntax tags
  return res.status(200).json({ 
    message: `Milestone with ID ${targetedId} has been successfully deleted from server memory.` 
  });
});
app.listen(PORT, () => {
  console.log(`Backend Express engine is listening live on http://localhost:${PORT}`);
});
