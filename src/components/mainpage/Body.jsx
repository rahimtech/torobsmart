import React from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import Searchbox from "./Searchbox.jsx";
function Body() {
  return (
    <div className="min-h-screen">
      <Header />
      <Searchbox />
      <Footer />
    </div>
  );
}

export default Body;
