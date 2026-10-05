 // middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // 1. Extract the Authorization parameter text from the incoming HTTP headers
    const authHeader = req.headers.authorization;

    // Guard Clause: If the token parameter is missing entirely, block the request immediately
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: "Access denied. Missing token credentials." });
    }

    // 2. Split the string text to isolate the raw cryptographic signature token
    const token = authHeader.split(' ')[1];

    // 3. Cryptographically decode and verify the token signature
    // 🚀 Critical: Match this secret text signature value string exactly to what you hardcoded on line 96 of server.js!
    const decodedPayload = jwt.verify(token, 'super_secret_saskatchewan_immigration_crypto_key_2026');

    // 4. Attach the parsed user identity context data fields straight onto the Express request object
    req.user = decodedPayload;

    // 5. Relinquish control and pass execution to the next controller route down the pipeline
    next();

  } catch (err) {
    return res.status(403).json({ error: "Access denied. Invalid or expired token validation signature." });
  }
};
