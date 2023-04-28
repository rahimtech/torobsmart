// import jwt from "jsonwebtoken";
import connect from "../../database/conn";
import User from "../../model/UserSchema";

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
    res.status(200).send();
  }

  return;
}

export default signup;
