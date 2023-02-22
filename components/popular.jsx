import { useState, useEffect } from "react";
import Image from "next/image";
import test from "../public/images/Image Placeholder.png";

export default function Popular() {
  function renderPopular() {
    const popularElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return popularElements.map((x, key) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <div className="max-w-[300px] h-[330px] text-center bg-zinc-700 rounded-lg mb-5">
          <Image
            className="max-w-[200px] max-h-[200px] block m-auto mt-6 rounded-full"
            src={test}
            alt="test"
          />
          <p className="text-2xl">Collection</p>
          <p className="text-xl">
            Floor Price: <span className="">100 ETH</span>
          </p>
        </div>
      );
    });
  }

  return (
    <>
      <h2 className="text-5xl font-semibold tracking-wider leading-none mb-5">
        Popular Collections
      </h2>
      <h3 className="text-2xl mb-12 font-normal leading-normal">
        Checkout the top Creators on the Ethereum Network
      </h3>
      <div className="grid grid-cols-3">{renderPopular()}</div>
    </>
  );
}
