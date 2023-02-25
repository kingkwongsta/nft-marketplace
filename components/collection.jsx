import { useState, useEffect } from "react";
import Image from "next/image";
import trendPlaceholder from "../public/images/Trending-Placeholder.png";
import { nftData, salesData } from "../pages/api/nftPortData";
import data2 from "../pages/api/cleanNFTData";

export default function Collection() {
  const collectionName = nftData.contract.name
    .replace(/([A-Z])/g, " $1")
    .trim();

  const index = data2.findIndex((x) => x.collection === collectionName);
  console.log(index);

  return (
    <div className="container flex flex-row">
      <div className="section-img basis-1/5">
        <Image
          src={nftData.contract.metadata.cached_thumbnail_url}
          width={200}
          height={200}
          alt="placeholder"
        />
      </div>
      <div className="section-stats basis-2/5">
        <div className="stat-title">
          {nftData.contract.name.replace(/([A-Z])/g, " $1").trim()}
        </div>
        <div className="stat-details-section">
          <div>
            <div>Floor: {salesData.statistics.floor_price} ETH</div>
            <div>
              Total Vol: {Math.round(salesData.statistics.total_volume)} ETH
            </div>
            <div>
              Market Cap: {Math.round(salesData.statistics.market_cap)} ETH
            </div>
            <div>
              Average Sale(24h):{" "}
              {Math.round(salesData.statistics.one_day_average_price * 10) / 10}{" "}
              ETH
            </div>
            <div>Owners: {salesData.statistics.num_owners}</div>
            <div>Supply: {salesData.statistics.total_supply}</div>
          </div>
        </div>
      </div>
      <div className="section-info basis-2/5">info</div>
    </div>
  );
}
