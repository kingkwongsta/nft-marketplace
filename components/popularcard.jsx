import { useState, useEffect } from "react";
import Image from "next/image";
import test from "../public/images/Image Placeholder.png";

export default function PopularCard() {
  return (
    <div className="max-w-[300px] h-[300px] text-center bg-zinc-700 rounded-lg mb-5">
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
}
