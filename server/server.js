const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors(corsOptions));
app.use(bodyParser.json());

const { Pool } = require("pg");

const db = new Pool({
  user: process.env.USERNAME,
  host: process.env.HOSTNAME,
  database: process.env.DATABASE_NAME,
  password: process.env.PASSWORD,
  port: 5432,
});


app.post();
app.get();
app.get();
app.get();
app.post();
app.post();


app.listen(port, () => console.log(`Listening on port ${port}`));