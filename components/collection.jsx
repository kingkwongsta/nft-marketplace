import { useState, useEffect } from "react";
import Image from "next/image";
import trendPlaceholder from "../public/images/Trending-Placeholder.png";

export default function Collection() {
  const [data, setData] = useState();
  return (
    <div className="container flex flex-row">
      <div className="section-img basis-1/5">
        <Image
          src={trendPlaceholder}
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
