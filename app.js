const express = require("express");
const cors = require("cors");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const bcrypt = require("bcrypt");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

let db = null;
const dbPath = path.join(__dirname, "database.db");

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () => {
      console.log("Server started running at http://localhost:3000");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message} `);
    process.exit(1);
  }
};

initializeDBAndServer();
