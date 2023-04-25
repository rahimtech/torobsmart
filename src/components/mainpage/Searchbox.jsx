import React, { useState } from "react";

import Search from "./Search.jsx";

const Searchbox = () => {
  return (
    <section
      style={{ minHeight: "85vh" }}
      className="flex justify-center items-center"
    >
      <div className="flex h-full justify-center items-center">
        {/* this is Search Input */}
        <Search />
      </div>
    </section>
  );
};

export default Searchbox;
