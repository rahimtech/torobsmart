const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");

//Pre-Confings
const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());

//Local Database
const users = [
  { id: 1, name: "ali", email: "ddd@gmail.com", pass: 1212 },
  { id: 12, name: "hassan", email: "fff@gmail.com", pass: 1313 },
];

//Connect-To-Database
var db = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "",
  database: "torob",
});

//Sign in ...
app.post("/signin", (req, res) => {
  db.query(
    "SELECT * FROM users WHERE email=?",
    [req.body.email],
    (err, result) => {
      if (result.length > 0) {
        res.status(204).send();
        return;
      } else {
        const token = jwt.sign(
          {
            username: req.body.email,
          },
          "mysupersecretkey",
          { expiresIn: "6 hours" }
        );
        db.query(
          "INSERT INTO users(id,name,email,pass,token) VALUES(?,?,?,?,?)",
          [, req.body.name, req.body.email, req.body.pass, token],
          (err, result) => {
            if (err) {
              console.log("err: ", err);
            } else {
              res.status(200).send({ access_token: token });

              return;
            }
          }
        );
      }
    }
  );
});

//Sign Up ...
app.post("/signup", (req, res) => {
  if (!req.body.email || !req.body.pass) {
    res.send("You Have Problem to Register");
    return;
  }
  const user = users.find((u) => {
    return u.email == req.body.email && u.pass == req.body.pass;
  });
  if (!user) {
    res.send("User Not Found !");
  }
  const token = jwt.sign(
    {
      sub: user.id,
      username: user.email,
    },
    "mysupersecretkey",
    { expiresIn: "3 hours" }
  );
  res.status(200).send({ access_token: token });
});

//Check Another pages ...
app.get("*", (req, res) => {
  res.send("Page NOT FOUND !!!");
});

//Server Running ...
app.listen(PORT, (err) => {
  if (err) throw err;
  if (!err) {
    console.log(`Serve Run On Port ${PORT}`);
  }
});
