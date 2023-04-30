import React, { useState } from "react";
import Button from "@mui/material/Button";
import Register from "../src/components/Register/Register";
import Search from "../src/components/mainpage/Search";
import UserContext from "../src/components/context/userContext.jsx";
import { getCookie, deleteCookie } from "cookies-next";
import { get, set } from "cookie-cutter";
import axios, { Axios } from "axios";

export default function Home() {
  const con = React.useContext(UserContext);

  // const [c, setC] = useState(con.cookies.user);
  const Logout = () => {
    axios.post("/api/logout", {});
    con.setCookie("undefined");
    console.log("con: ", con.cookies);
  };
  return (
    <>
      <header>
        <Register checkReg={con.checkReg} />

        <div className="bg-gray-50  w-100 flex justify-between px-10 py-2 ">
          <div
            id="left"
            className={`${con.cookies != undefined ? `hidden` : `block`}`}
          >
            <Button
              className="!text-gray-500 !border-gray-300"
              variant="outlined"
              size="small"
              onClick={() => con.setCheckReg("block")}
            >
              ثبت‌نام / ورود
            </Button>
          </div>
          <div
            id="left"
            className={`${con.cookies != undefined ? `block` : `hidden`}`}
          >
            <Button
              className="!text-gray-500 !border-gray-300"
              variant="outlined"
              size="small"
              onClick={() => Logout}
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
      <section
        style={{ minHeight: "85vh" }}
        className="flex justify-center items-center"
      >
        <div className="flex h-full justify-center items-center">
          {/* this is Search Input */}
          <Search />
        </div>
      </section>
      <footer className=" w-full relative bottom-0">
        <div className="bg-gray-50 w-100 flex justify-between px-10 py-2 ">
          <div id="left">
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
      </footer>
    </>
  );
}
