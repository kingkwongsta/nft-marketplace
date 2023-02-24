import { useState, useEffect } from "react";
import Image from "next/image";
import test from "../public/images/Image Placeholder.png";
import PopularCard from "./popularcard";
import data from "../pages/api/cleanNFTData";

export default function Popular() {
  function renderPopular() {
    const popularElements = [0, 1, 2, 3, 4, 5];
    return popularElements.map((x, key) => {
      return <PopularCard key={key} data={data[x]} />;
    });
  }
  console.log(data);

  return (
    <div className="mx-36 mb-20">
      <h2 className="text-5xl font-semibold tracking-wider leading-none mb-5">
        Popular Collections
      </h2>
      <h3 className="text-2xl mb-12 font-normal leading-normal">
        Checkout the top Creators on the Ethereum Network
      </h3>
      <div className="grid grid-cols-3">{renderPopular()}</div>
    </div>
  );
}
