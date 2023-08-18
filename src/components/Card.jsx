import React from "react";

const Card = ({soldout,num,nam,country,text,cost,person,image,star}) => {
  return (
    <div className="mx-2">
      <div className="relative">
        <img src={image} alt="" />
        <p
          className="uppercase absolute p-1 rounded-sm left-1 text-black2 font-medium top-1 bg-white"
          style={{ fontSize: "10px" }}
        >
          {soldout}
        </p>
      </div>
      <div>
        <div className="flex items-center mt-1">
          <img src={star} alt="" />
          <p className="text-sm">
            {num} <span style={{ color: "#918E9B" }}>({nam})</span>
            <span style={{ color: "#918E9B" }}>.{country}</span>
          </p>
        </div>
        <div className="mt-1">
          <p className="text-sm" style={{ color: "#222222" }}>
            {text}
          </p>
        </div>
        <div className="mt-1">
          <p className="text-sm">
            <span className="font-bold">{cost}</span>
            <span style={{ color: "#222222" }}>/ {person}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
