import connect from "../../database/conn";
import User from "../../model/UserSchema";
import jwt from "jsonwebtoken";
import cookie from "cookie";

const KEY = "QXYA-XYZP-XYIQ-ZVOT";

async function signup(req, res) {
  await connect();
  console.log("✅Connected");

  User.findOne({ email: req.body.email })
    .then((user) => {
      // user found
      if (user.password === req.body.password) {
        const token = jwt.sign(
          {
            name: user.name,
            email: user.email,
            password: user.password,
          },
          KEY
        );
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 12,
            sameSite: "strict",
            path: "/",
          })
        );
        res.status(200).send(token);
      } else {
        // user not found

        res.status(401).send();
      }
    })
    .catch((err) => {
      // Server Not Connect
      res.status(500).send();
    });

  return;
}

export default signup;
