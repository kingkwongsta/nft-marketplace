import React from "react";
import Image from "next/image";
import trendPlaceholder from "../public/images/Trending-Placeholder.png";
import additionalNFT from "../public/images/additionalNFT.png";

export default function TrendingCard({ img, all }) {
  function randomNum() {
    return Math.floor(Math.random() * 101) + 1;
  }
  function truncate(input) {
    return input.substring(0, input.indexOf("."));
  }

  return (
    <div className="trending-card max-w-[350px]">
      <Image
        className="mb-6"
        src={img[randomNum()]}
        alt="absdf"
        width={350}
        height={300}
      />
      <div className="flex justify-between">
        <Image src={img[randomNum()]} alt="absdf" width={100} height={100} />
        <Image src={img[randomNum()]} alt="absdf" width={100} height={100} />
        <Image src={additionalNFT} alt="absdf" width={100} height={100} />
      </div>
      <div className="mt-7">
        <h3 className="text-2xl font-semibold mb-3">
          {all[0].contract.openSea.collectionName}
        </h3>
        <div className="collection-desc">
          <span className="text-lg">
            {truncate(all[0].contract.openSea.description)}
          </span>
        </div>
      </div>
    </div>
  );
}
