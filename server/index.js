// Fixed 1: Standardized syntax patterns matching native CommonJS compilation requirements
const express = require('express');
const app = express();
const PORT = 5000;

// Configure body-parser components to handle JSON payloads smoothly
app.use(express.json());

// Fixed 2 & 3: Cleaned up spelling typos and established correct express chaining methods
app.get("/api/ping", (req, res) => {
  res.status(200).json({ message: "API server is running live!" });
});

// Activate background thread listeners on local area port 5000
app.listen(PORT, () => {
  console.log(`Backend Express engine is listening live on http://localhost:${PORT}`);
});
