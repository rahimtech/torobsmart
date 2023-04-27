import jwt from "jsonwebtoken";
import connect from "../../database/conn";
// import Test from "../../model/testModel";
// import mysql from "mysql";
// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
import User from "../../model/UserSchema";

//Pre-Confings
// const app = express();
// const PORT = 3001;
// app.use(cors());
// app.use(bodyParser.json());

//Local Database
// const users = [
//   { id: 1, name: "ali", email: "ddd@gmail.com", pass: 1212 },
//   { id: 12, name: "hassan", email: "fff@gmail.com", pass: 1313 },
// ];

// var db = mysql.createConnection({
//   multipleStatements: true,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "torob",
// });

async function signup(req, res) {
  console.log("STARTING SIGN UP...");
  await connect();
  console.log("✅Connected");

  // const tst = await Test.create({ name: "Bitch!" });
  // console.log("Created a test: ", tst);
  // const createdTest = await Test.find({ name: "Bitch!" });
  // console.log("This is the created test:", createdTest);
  // res.status(200);
  // res.status(200).json({ name: "John Doe" });

  const existingUser = await User.find({ email: req.body.email });
  console.log("existingUser: ", existingUser);

  if (existingUser.length > 0) {
  } else {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.pass,
    });
    console.log("user: ", user);
  }

  res.status(200);

  console.log("res: ", res);

  return;
  // db.query(
  //   "SELECT * FROM users WHERE email=?",
  //   [req.body.email],
  //   (err, result) => {
  //     if (result.length > 0) {
  //       res.status(204).send();
  //       return;
  //     } else {
  //       const token = jwt.sign(
  //         {
  //           username: req.body.email,
  //         },
  //         "mysupersecretkey",
  //         { expiresIn: "6 hours" }
  //       );
  //       db.query(
  //         "INSERT INTO users(id,name,email,pass,token) VALUES(?,?,?,?,?)",
  //         [, req.body.name, req.body.email, req.body.pass, token],
  //         (err, result) => {
  //           if (err) {
  //             console.log("err: ", err);
  //           } else {
  //             res.status(200).send({ access_token: token });

  //             return;
  //           }
  //         }
  //       );
  //     }
  //   }
  // );

  // app.post("/signup", (req, res) => {});
}

export default signup;
