import Axios from "axios";
import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

const Login = () => {
  const con = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  function setLogin(e) {
    e.preventDefault();
    Axios.post("http://localhost:3000/api/signin", {
      email: email,
      password: password,
    })
      .then((res) => {
        console.log("res: ", res);
        con.setCookie(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }
  return (
    <div>
      <form method="POST" onSubmit={(e) => setLogin(e)}>
        <input
          type="email"
          placeholder="ایمیل را وارد کنید"
          onBlur={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="رمز خود را وارد کنید"
          onBlur={(e) => setPass(e.target.value)}
        />
        <button>ثبت</button>
      </form>
    </div>
  );
};

export default Login;
