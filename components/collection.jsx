import { useState, useEffect } from "react";
import Image from "next/image";
import trendPlaceholder from "../public/images/Trending-Placeholder.png";
import getCollection from "../pages/api/nftport";

export default function Collection() {
  const [data, setData] = useState();
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await getCollection();
    setData(response);
  };

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
