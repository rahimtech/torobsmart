import cookie from "cookie";
import UserContext from "../../src/components/context/userContext";
import { useContext } from "react";

export default function logout(req, res) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      sameSite: "strict",
      path: "/",
    })
  );
  res.statusCode = 200;
  res.json({ success: true });
}
