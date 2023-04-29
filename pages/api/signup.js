import connect from "../../database/conn";
import User from "../../model/UserSchema";
import jwt from "jsonwebtoken";

const KEY = "ASDFGHJKL";
async function signup(req, res) {
  await connect();
  console.log("✅Connected");

  const existingUser = await User.find({ email: req.body.email });

  if (existingUser.length > 0) {
    res.status(401).send();
  } else {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.pass,
    });
    const token = jwt.sign(
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.pass,
      },
      KEY
    );
    res.status(200).send(token);
  }

  return;
}

export default signup;
