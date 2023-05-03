import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Register from "./Register/Register";
import UserContext from "./context/userContext";
import axios from "axios";

function Header() {
  const con = useContext(UserContext);

  const [checkReg, setCheckReg] = useState("hidden");
  function checkLogin() {
    if (con.cookie) {
      //user Signin
      return true;
    } else {
      //User Not-Signin
      return false;
    }
  }

  const Logout = () => {
    axios.post("http://localhost:3000/api/logout", {});
    con.setCookie("");
  };
  return (
    <header>
      <Register checkReg={con.checkReg} />
      <div className="bg-gray-50  w-100 flex justify-between px-10 py-2 ">
        <div id="left" className={`${checkLogin() ? `hidden` : `block`}`}>
          <Button
            className="!text-gray-500 !border-gray-300"
            variant="outlined"
            size="small"
            onClick={() => con.setCheckReg("block")}
          >
            ثبت‌نام / ورود
          </Button>
        </div>
        <div id="left" className={`${checkLogin() ? `block` : `hidden`}`}>
          <Button
            className="!text-gray-500 !border-gray-300"
            variant="outlined"
            size="small"
            onClick={() => Logout()}
          >
            خروج{" "}
          </Button>
        </div>
        <div id="right">
          <ul className="list-none flex justify-between  ">
            <li>
              <Button
                className="hover:!text-red-600 hover:!bg-red-50 !text-gray-500"
                color="inherit"
                size="medium"
              >
                خوراک
              </Button>
            </li>
            <li>
              <Button
                className="hover:!text-red-600 hover:!bg-red-50 !text-gray-500"
                color="inherit"
                size="medium"
              >
                پوشاک
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
