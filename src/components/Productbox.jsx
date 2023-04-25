import React from "react";
import Image from "next/image";

function Productbox({ image, name, price }) {
  return (
    <div className="bg-white shadow-md m-2  w-28 h-36 flex justify-center items-center rounded-md flex-col hover:cursor-pointer hover:shadow-lg">
      <div>
        <Image src={image} alt="تصویر محصول" />
      </div>
      <div>
        <h5>{name}</h5>
      </div>
      <div>
        <h6 className="font-bold">{price}</h6>
      </div>
    </div>
  );
}

export default Productbox;
