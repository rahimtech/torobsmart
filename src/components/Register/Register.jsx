import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";
import CloseIcon from "@mui/icons-material/Close";
import Axios from "axios";
import Alert from "@mui/material/Alert";
import { Button, Input, TextField } from "@mui/material";
import { useFormik } from "formik";
import { registerValidate } from "../../../lib/validate.js";
import { useRouter } from "next/router";

const Register = () => {
  const con = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [open, setOpen] = useState("");

  const signInFunc = async (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/api/signup", {
      name: name,
      email: email,
      pass: pass,
    }).then((res) => {
      return res;
    });
    console.log("End Connection🔚");
  };

  //Every inputs working with FORMIK From now on.
  return (
    <div
      className={`${con.checkReg} bg-with-opacity-login  w-screen h-screen z-10 items-center fixed`}
    >
      <div>
        <CloseIcon
          className="rounded-full bg-slate-100 text-gray-500 z-30 absolute items-center left-0 right-0 mx-auto top-24 hover:shadow-md hover:cursor-pointer text-center"
          onClick={() => con.setCheckReg("hidden")}
        />
        <Alert
          severity="warning"
          className={`z-30 ${
            open == 400 ? "absolute" : "hidden"
          }  rtl items-center left-0 right-0 mx-auto top-36 w-72`}
        >{`${serverMessage}`}</Alert>
        <Alert
          severity="success"
          className={`z-30 ${
            open == 200 ? "absolute" : "hidden"
          } rtl items-center left-0 right-0 mx-auto top-36 w-72`}
        >{`${serverMessage}`}</Alert>
      </div>

      <form method="POST" onSubmit={(e) => signInFunc(e)}>
        <div className="h-screen w-screen flex items-center">
          <div
            className={`flex justify-center w-52 h-auto rtl flex-col mx-auto my-auto p-5 shadow-md bg-white !z-30 rounded-md`}
          >
            <input
              id="standard-basic"
              label="نام کاربری"
              variant="standard"
              type="text"
              name="name"
              placeholder="نام کاربری خود را بنویسید"
              className="mb-3 rtl"
              onBlur={(e) => setName(e.target.value)}
            />
            <input
              id="standard-basic"
              label="ایمیل"
              variant="standard"
              name="email"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="my-3 rtl"
              onBlur={(e) => setEmail(e.target.value)}
            />
            <input
              id="standard-basic"
              label="رمز"
              variant="standard"
              type="password"
              name="password"
              placeholder="رمز خود را وارد کنید"
              className="mb-3 rtl"
              onBlur={(e) => setPass(e.target.value)}
            />
            <input
              id="standard-basic"
              label="چک رمز"
              variant="standard"
              type="password"
              name="cpassword"
              placeholder="مجدد رمز را وارد کنید"
              className="mb-3 rtl"
              onBlur={(e) => setPass(e.target.value)}
            />
            <Button type="submit" className="mt-5">
              ثبت نام
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
