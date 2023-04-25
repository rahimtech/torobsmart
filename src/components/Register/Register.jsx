import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";
import CloseIcon from "@mui/icons-material/Close";
import Axios from "axios";
import Alert from "@mui/material/Alert";
import { Button, Input, TextField } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

const Register = () => {
  const con = useContext(UserContext);
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [open, setOpen] = useState("");

  const signInFunc = async () => {
    await Axios.post("http://localhost:3001/signin", {
      name: name,
      email: email,
      pass: pass,
    })
      .then((response) => {
        if (response.status != 200) {
          setOpen("400");
          setServerMessage("کاربری با این ایمیل وجود دارد !!");
        } else {
          setOpen("200");
          setServerMessage("با موفقیت ثبت نام شدید :)");
        }
      })
      .catch((err) => {
        setOpen("400");
        setServerMessage("سرور برای ثبت نام متصل نیست");
      });
  };
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );

  // return (
  //   <div
  //     className={`${con.checkReg} bg-with-opacity-login  w-screen h-screen z-10 items-center fixed`}
  //   >
  //     <CloseIcon
  //       className="rounded-full bg-slate-100 text-gray-500 z-30 absolute items-center left-0 right-0 mx-auto top-24 hover:shadow-md hover:cursor-pointer text-center"
  //       onClick={() => con.setCheckReg("hidden")}
  //     />
  //     <Alert
  //       severity="warning"
  //       className={`z-30 ${
  //         open == 400 ? "absolute" : "hidden"
  //       }  rtl items-center left-0 right-0 mx-auto top-36 w-72`}
  //     >{`${serverMessage}`}</Alert>
  //     <Alert
  //       severity="success"
  //       className={`z-30 ${
  //         open == 200 ? "absolute" : "hidden"
  //       } rtl items-center left-0 right-0 mx-auto top-36 w-72`}
  //     >{`${serverMessage}`}</Alert>
  //     <div className="h-screen w-screen flex items-center">
  //       <div
  //         className={`flex justify-center w-52 h-auto rtl flex-col mx-auto my-auto p-5 shadow-md bg-white !z-30 rounded-md`}
  //       >
  //         <TextField
  //           id="standard-basic"
  //           label="نام و نام‌خانوادگی"
  //           variant="standard"
  //           type="text"
  //           placeholder="نام و نام خانوادگی خود را وارد کنید"
  //           className="mb-3 rtl"
  //           onBlur={(e) => setName(e.target.value)}
  //         />
  //         <TextField
  //           id="standard-basic"
  //           label="ایمیل"
  //           variant="standard"
  //           type="email"
  //           placeholder="ایمیل خود را وارد کنید"
  //           className="my-3 rtl"
  //           onBlur={(e) => setEmail(e.target.value)}
  //         />
  //         <TextField
  //           id="standard-basic"
  //           label="رمز"
  //           variant="standard"
  //           type="password"
  //           placeholder="رمز خود را وارد کنید"
  //           className="mb-3 rtl"
  //           onBlur={(e) => setPass(e.target.value)}
  //         />
  //         <Button type="submit" className="mt-5" onClick={() => signInFunc()}>
  //           ثبت نام
  //         </Button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Register;
