import { useState, useEffect } from "react";
import Image from "next/image";
import trendPlaceholder from "../public/images/Trending-Placeholder.png";
import data from "../pages/api/nftPortData";

export default function Collection() {
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
      <div className="section-stats basis-2/5">stats</div>
      <div className="section-info basis-2/5">info</div>
    </div>
  );
}
