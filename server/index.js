const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createPool({
  host: "sql770.main-hosting.eu",
  port: 3306,
  user: "u992124364_popo",
  password: "Balouna8!",
  database: "u992124364_test_streamy",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sqlSelect = "select * from users where username = ? and password = ?";

  db.query(sqlSelect, [username, password], (err, result) => {
    res.send(result);
    console.log(result);
    console.log(username);
  });
});

app.post("/api/insert", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sqlInsert = "insert into users (username, password) values (?,?)";
  db.query(sqlInsert, [username, password], (err, result) => {
    res.send(result);
    console.log(username);
    console.log(password);
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("running on port 3001");
});
