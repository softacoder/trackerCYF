// Version 2. This version is a mix of what I and Anna put in server.js Please note I have left two different ports. const PORT = 3001  came as a default
// when i created a login and password function for frontend and backend. The const that was duplicates I have removed so we have just one of each.
// It has a simplified login function that does not allow us to have a login function for trainees and one for mentors.
// Necessary because mentors will have increased permission to create and upload modules and tasks. Updates necessary. // For front-end code see menubar.js
// Please note I have left a port listener in the login function. Remove the one in login and keep yours at the very end?

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const { Pool } = require("pg");
const db = new Pool({
  user: process.env.USERNAME,
  host: process.env.HOSTNAME,
  database: process.env.DATABASE_NAME,
  password: process.env.PASSWORD,
  port: 5432,
});

app.post("/:todoid", (req, res) => {
  const toDoId = Number(req.params.todoid);
  const { done, feedback } = req.body;
  db.query("UPDATE to_do SET done = $1, feedback = $2 where id = $3", [
    done,
    feedback,
    toDoId,
  ])
    .then(() => res.sendStatus(201))
    .catch((err) => res.json(err));
});

app.post("/", (req, res) => {
  const { task_id, user_id } = req.body;
  db.query("INSERT INTO to_do (task_id, user_id, done) value ($1, $2, false)", [
    task_id,
    user_id,
  ]);
});
app.get("/:user", (req, res) => {
  const userId = Number(req.params.user);
  db.query("SELECT * from to_do where user_id = $1", [userId])
    .then((response) => res.json(response.rows))
    .catch((err) => res.json(err));
});
app.get("/", (req, res) => {
  db.query(
    "select module, name, due_date from to_do join task on (task.id=to_do.task_id) group by name"
  )
    .then((result) => res.json(result.rows))
    .catch((err) => res.json(err));
});
// app.get();
// app.post();

app.listen(port, () => console.log(`Listening on port ${port}`)); //Please note I have left a similar port listener in the login function. Remove the one in login and put this one at the very end?

// start login function
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
// end login function

// Version 1 this has a simplified login function that does not allow us to have a login function for trainees and one for mentors.
// Necessary because mentors will have increased permission to create and upload modules and tasks. Updates necessary. For front-end code see menubar.js

// const express = require("express");
// const bodyParser = require("body-parser");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const app = express();
// const PORT = 3001;

// app.use(bodyParser.json());

// const secretKey = "your-secret-key";

// const users = [
//   { id: 1, username: "trainee1", passwordHash: "" },
//   { id: 2, username: "mentor1", passwordHash: "" },
// ];

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find((u) => u.username === username);

//   if (!user) {
//     return res.status(401).json({ message: "Authentication failed" });
//   }

//   const passwordMatch = bcrypt.compareSync(password, user.passwordHash);

//   if (!passwordMatch) {
//     return res.status(401).json({ message: "Authentication failed" });
//   }

//   const token = jwt.sign(
//     { userId: user.id, username: user.username },
//     secretKey,
//     {
//       expiresIn: "1h",
//     }
//   );

//   res.json({ token });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
