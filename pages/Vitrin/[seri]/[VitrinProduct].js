import React, { useEffect, useState } from "react";
import Header from "../../../src/components/Header.jsx";
import Footer from "../../../src/components/Footer.jsx";
import Database from "../../../src/components/Database.js";
import Acco from "../../../src/components/productpage/Accordion.jsx";
import Productbox from "../../../src/components/Productbox.jsx";
import { motion as M } from "framer-motion";
import Link from "next/link";
import UserContext from "../../../src/components/context/userContext.jsx";
import { useRouter } from "next/router";

function index() {
  const con = React.useContext(UserContext);
  con.handlerDatabase.sort((a, b) => b.click - a.click);
  const rout = useRouter();
  console.log("rout: ", rout);

  return (
    <div>
      <Header />
      <M.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ minHeight: "100vh" }}
        className="flex"
      >
        <div id="left" className="w-7/12">
          <h2 className="mx-auto text-center mt-9">ویترین محصولات تٌرب</h2>

          <div className="flex justify-center flex-row content-center w-11/12 mx-auto flex-wrap overflow-y-auto items-center">
            {con.handlerDatabase.map((i, index) => {
              if (rout.query.seri === i.seri || con.flag.length > 0) {
                return (
                  <Link href={`/product/${i.seri}/${index}/${i.name}`}>
                    <Productbox
                      key={index}
                      image={i.image}
                      name={i.name}
                      price={i.price}
                    />
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div id="right" className="w-5/12 h-screen bg-white ">
          <div>
            <Acco />
          </div>
        </div>
      </M.div>

      <Footer />
    </div>
  );
}

export default index;
