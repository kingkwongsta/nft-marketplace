import { useState, useEffect } from "react";
import Image from "next/image";
import trendPlaceholder from "../public/images/Trending-Placeholder.png";
import data from "../pages/api/nftPortData";
import data2 from "../pages/api/cleanNFTData";

export default function Collection() {
  const collectionName = data.contract.name.replace(/([A-Z])/g, " $1").trim();

  const index = data2.findIndex((x) => x.collection === collectionName);
  console.log(index);

  return (
    <div className="container flex flex-row">
      <div className="section-img basis-1/5">
        <Image
          src={data.contract.metadata.cached_thumbnail_url}
          width={200}
          height={200}
          alt="placeholder"
        />
      </div>
      <div className="section-stats basis-2/5">
        <div className="stat-title">
          {data.contract.name.replace(/([A-Z])/g, " $1").trim()}
        </div>
        <div className="stat-details-section">
          <div>
            <div>Supply: {data2[index].supply}</div>
            <div>Floor: {data2[index].floor} ETH</div>
          </div>
        </div>
      </div>
      <div className="section-info basis-2/5">info</div>
    </div>
  );
}
