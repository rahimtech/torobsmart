import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../../public/image/torob_logo.svg";
import Image from "next/image";
import Link from "next/link";
import Database from "../Database.js";

const Search = () => {
  const [ajax, setAjax] = useState("mog");
  const [checkSuggest, setCheckSuggest] = useState("hidden");

  const searchsuggest = (e) => {
    String(e);
    setAjax(e);
    let x = parseInt(e.length);
    if (x > 0) {
      setCheckSuggest("block");
    } else {
      setCheckSuggest("hidden");
    }
  };
  return (
    <div>
      <div className="flex justify-center mb-5">
        <Image src={Logo} alt="ترب" width="350px" height="300px" />
      </div>
      <div className="">
        <input
          type="text"
          className="rtl rounded-sm w-96 py-2 pr-9  border-2 border-solid border-gray-400"
          placeholder="نام کالا را وارد کنید"
          onChange={(e) => searchsuggest(e.target.value)}
        />
        <span className="relative right-7 top-0" title="ویترین محصولات">
          <Link href="/Vitrin">
            <SearchIcon className="!text-gray-500 hover:cursor-pointer" />
          </Link>
        </span>
      </div>
      <div
        className={` absolute searchbox-Horizontal-Size py-1 h-auto rtl ${checkSuggest} bg-white  border-gray-400 border-2 border-solid rounded-sm mt-1 shadow-md`}
      >
        {Database.map((i, index) => {
          if (i.name.indexOf(ajax) > -1) {
            return (
              <Link
                className="!no-underline"
                href={`/Vitrin/${i.seri}/${i.name}`}
              >
                <p className="pr-2 px-2 py-2	text-gray-600 hover:bg-gray-100 hover:cursor-pointer">
                  {i.name}
                </p>
              </Link>
            );
          }
        })}
      </div>

      <div className="flex justify-center mt-5 text-gray-400">
        <p>این سایت نمونه‌ای از وبسایت ترب میباشد</p>
      </div>
    </div>
  );
};
export default Search;
