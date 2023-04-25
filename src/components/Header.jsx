import React, { useState } from "react";
import Button from "@mui/material/Button";
import Register from "./Register/Register";
import UserContext from "./context/userContext";

function Header() {
  const [checkReg, setCheckReg] = useState("hidden");

  return (
    <UserContext.Provider value={{ checkReg, setCheckReg }}>
      <header>
        <Register checkReg={checkReg} />

        <div className="bg-gray-50  w-100 flex justify-between px-10 py-2 ">
          <div id="left">
            <Button
              className="!text-gray-500 !border-gray-300"
              variant="outlined"
              size="small"
              onClick={() => setCheckReg("block")}
            >
              ثبت‌نام / ورود
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
    </UserContext.Provider>
  );
}

export default Header;
