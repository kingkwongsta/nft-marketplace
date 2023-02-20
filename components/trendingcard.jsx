import React from "react";
import Image from "next/image";
import trendPlaceholder from "../public/images/Trending-Placeholder.png";
import additionalNFT from "../public/images/additionalNFT.png";

export default function TrendingCard({ img }) {
  return (
    <div className="trending-card">
      <Image
        className="mb-6"
        src="https://cdn.hswstatic.com/gif/why-is-sky-blue.jpg"
        alt="absdf"
        width={350}
        height={250}
      />
      <div className="flex justify-between">
        <Image src={trendPlaceholder} alt="absdf" width={100} height={100} />
        <Image src={trendPlaceholder} alt="absdf" width={100} height={100} />
        <Image src={additionalNFT} alt="absdf" width={100} height={100} />
      </div>
      <div className="mt-7">
        <h3 className="text-2xl font-semibold mb-3">DSGN Animals</h3>
        <div className="flex">
          <Image src={trendPlaceholder} alt="weree" width={30} />
          <span className="ml-3 text-lg">MrFox</span>
        </div>
      </div>
    </div>
  );
}
