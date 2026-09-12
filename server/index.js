// server.js
const express = require('express');
const app = express();
const PORT = 5000;

// Centralized database module link
const db = require('./data/mockDb'); 

app.use(express.json());

// Verification ping route
app.get("/api/ping", (req, res) => {
  res.status(200).json({ message: "API server is running live!" });
});

// Fixed 1: Eliminated data query duplication lines for cleaner scaling memory performance
app.get("/api/milestones", (req, res) => {
  const milestoneData = db.getMilestones();
  res.status(200).json(milestoneData); // Returns array payload directly
});

app.get("/api/habits", (req, res) => {
  const habitData = db.getHabits();
  res.status(200).json(habitData);
});

// Fixed 2: Cleaned up the .apply syntax break error to normalize the chaining protocol
app.get("/api/dictionary", (req, res) => {
  const dictionaryData = db.getDictionary();
  res.status(200).json(dictionaryData);
});

app.listen(PORT, () => {
  console.log(`Backend Express engine is listening live on http://localhost:${PORT}`);
});
