import { useState, useEffect } from "react";
import Image from "next/image";
import Popular from "./popular";
import { nftData, salesData } from "../pages/api/nftPortData";
import data2 from "../pages/api/cleanNFTData";

export default function Collection() {
  const collectionName = nftData.contract.name
    .replace(/([A-Z])/g, " $1")
    .trim();

  const index = data2.findIndex((x) => x.collection === collectionName);
  console.log(index);

  const stat = [
    {
      metric: "Floor:",
      amount: `${salesData.statistics.floor_price} ETH`,
    },
    {
      metric: "Total Vol:",
      amount: `${Math.round(salesData.statistics.total_volume)} ETH`,
    },
    {
      metric: "Market Cap:",
      amount: `${Math.round(salesData.statistics.market_cap)} ETH`,
    },
    {
      metric: "Avg Sale(24h):",
      amount: `${
        Math.round(salesData.statistics.one_day_average_price * 10) / 10
      } ETH`,
    },
    {
      metric: "Owners:",
      amount: `${salesData.statistics.num_owners}`,
    },
    {
      metric: "Supply:",
      amount: `${Math.round(salesData.statistics.total_supply)}`,
    },
  ];

  function renderStats() {
    return stat.map((stat, index) => {
      return (
        <div className="flex justify-between bg-zinc-700 p-2" key={index}>
          <div>{stat.metric}</div>
          <div>{stat.amount}</div>
        </div>
      );
    });
  }
  return (
    <>
      <div className="container flex flex-row">
        <div className="section-img basis-1/5 flex justify-center">
          <Image
            className="min-w-[230px]"
            src={nftData.contract.metadata.cached_thumbnail_url}
            width={200}
            height={200}
            alt="placeholder"
          />
        </div>
        <div className="section-stats basis-2/5">
          <div className="stat-title text-4xl font-medium mb-8">
            {nftData.contract.name.replace(/([A-Z])/g, " $1").trim()}
          </div>
          <div className="stat-details-section grid grid-cols-2 gap-x-14 gap-y-4 text-xlg uppercase">
            {renderStats()}
          </div>
        </div>
        <div className="section-info basis-2/5">info</div>
      </div>
    </>
  );
}
