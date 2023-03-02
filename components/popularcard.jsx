import { useState, useEffect } from "react";
import Image from "next/image";
import test from "../public/images/Image Placeholder.png";

export default function PopularCard({ nft }) {
  function randomNum() {
    return Math.floor(Math.random() * 10);
  }
  return (
    <div className="max-w-[300px] text-center bg-zinc-700 rounded-lg mb-5 pb-5">
      <Image
        className="max-w-[200px] min-h-[200px] max-h-[200px] block m-auto mt-6 rounded-md mb-5"
        src={nft.metadata.thumbnail_url}
        alt="test"
        width={200}
        height={200}
      />
      <p className="text-2xl font-medium mb-2">
        {nft.name.replace(/([A-Z])/g, " $1").trim()}
      </p>
      {/* <p className="text-xl text-slate-300	">
        Floor Price: <span className="">{data.floor} ETH</span>
      </p> */}
    </div>
  );
}
