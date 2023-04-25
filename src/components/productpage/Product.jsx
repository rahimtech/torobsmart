import React, { useState } from "react";
import Productbox from "../Productbox.jsx";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Database from "../Database.js";
import { Link, useParams } from "react-router-dom";
import { motion as M } from "framer-motion";
import { Button } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Product() {
  const [stateBuy, setStateBuy] = useState(true);
  const { serip } = useParams();
  const { counter } = useParams();
  Database.find((item) => {
    if (item.id === Database[counter].id) {
      item.click += 1;
    }
  });

  return (
    <div>
      <Header />
      <M.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ minHeight: "100vh" }}
      >
        <div id="center" className=" flex justify-evenly mt-6">
          <div id="left" className="w-4/12">
            {/* Left First Stage */}
            <div className="w-full h-36 bg-white text-center flex justify-center flex-wrap">
              <h3 className="w-full mt-2 ">آخرین تغییرات قیمت</h3>
              <canvas className="w-full h-2/4 bg-red-300 mx-1"></canvas>
            </div>
            {/* Left Second Stage */}
            <div className="w-full h-80 mt-3 bg-white text-center flex justify-center flex-wrap">
              <h3 className="w-full mt-2">مشخصات محصول</h3>
              <canvas className="w-full h-2/4 bg-red-300 mx-1"></canvas>
            </div>
          </div>
          <div id="right" className="w-6/12">
            {/* Right First Stage */}
            <div className="flex w-full py-6 bg-white justify-evenly items-center">
              <div id="left" className="rtl w-3/5">
                <h3>{Database[counter].name}</h3>
                <p>{Database[counter].des}</p>
                <p className="text-red-500 my-5">
                  {Database[counter].price} تا {Database[counter].price}
                </p>
                <div className="flex justify-between">
                  <Button color="error" variant="contained">
                    خرید از ارزان ترین فروشنده
                  </Button>
                  <ShareIcon />
                  <FavoriteBorderIcon />
                  <NotificationsNoneIcon />
                </div>
              </div>
              <div id="right" className="r-0">
                <img src={Database[0].image} />
              </div>
            </div>
            {/* Right Second Stage */}
            <div className="flex w-full py-6 mt-3 bg-white justify-evenly items-center">
              <div id="left" className="rtl w-full ">
                <h3 className="mr-3 ">فروشنده ها</h3>

                <div className="flex mt-3">
                  <Button
                    variant="text"
                    className={`${
                      stateBuy
                        ? `!border-b-2 !rounded-none !border-solid !border-slate-500`
                        : ``
                    }`}
                    onClick={() => setStateBuy(true)}
                  >
                    خرید اینترنتی
                  </Button>
                  <Button
                    variant="text"
                    className={`${
                      stateBuy
                        ? ``
                        : `!border-b-2 !rounded-none !border-solid !border-slate-500`
                    }`}
                    onClick={() => setStateBuy(false)}
                  >
                    خرید حضوری
                  </Button>
                </div>
                <hr className="border-gray-300" />

                <div
                  id="box"
                  className={`w-full h-20 ${
                    stateBuy ? `flex ` : `hidden`
                  } justify-around hover:bg-slate-200  py-4`}
                >
                  <h4 className="mr-3 ">فروشگاه تابان</h4>
                  <div className="w-2/5">
                    <div className="w-fit  font-light px-3 rounded-lg border border-gray-300 bg-green-300">
                      5سال در ترب
                    </div>
                    <h5>{Database[counter].des}</h5>
                  </div>
                  <Button color="error" className="w-12 h-8" variant="outlined">
                    خرید
                  </Button>
                </div>

                <div
                  id="box"
                  className={`w-full h-20 ${
                    stateBuy ? `hidden` : `flex border-b-4`
                  } justify-around hover:bg-slate-200  py-4`}
                >
                  <h4 className="mr-3 ">فروشگاه فیروزه</h4>
                  <div className="w-2/5">
                    <div className="w-fit  font-light px-3 rounded-lg border border-gray-300 bg-green-300">
                      3سال در ترب
                    </div>
                    <h5>{Database[counter].des}</h5>
                  </div>
                  <Button color="error" className="w-12 h-8" variant="outlined">
                    خرید
                  </Button>
                </div>
              </div>
            </div>
            {/* ----End Right Stage---- */}
          </div>
        </div>
        <div className="my-36">
          <h2 className="mx-auto text-center my-9">محصولات مشابه</h2>

          <div className="flex justify-center  flex-row h-full content-center w-3/4 mx-auto flex-wrap overflow-y-auto items-center">
            {Database.map((i, index) => {
              if (i.seri === serip) {
                return (
                  <Link to={`/product/${i.seri}/${index}/${i.name}`}>
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
      </M.div>

      <Footer />
    </div>
  );
}

export default Product;
