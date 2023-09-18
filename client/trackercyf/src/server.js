// Version 1 this has a simplified login function that does not allow us to have a login function for trainees and one for mentors.
// Necessary because mentors will have increased permission to create and upload modules and tasks. Updates necessary. For front-end code see menubar.js

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express();
const PORT = 3001;

app.use(bodyParser.json());

const secretKey = "your-secret-key";

const users = [
  { id: 1, username: "trainee1", passwordHash: "" }, // Password should be hashed in a real application
  { id: 2, username: "mentor1", passwordHash: "" },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  // Compare the hashed password in the database with the provided password
  const passwordMatch = bcrypt.compareSync(password, user.passwordHash);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  // Generate a JWT token
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    secretKey,
    {
      expiresIn: "1h", // Token expiration time
    }
  );

  res.json({ token });
});

// Add more routes for user management, e.g., /create-user, /update-user, /delete-user

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
