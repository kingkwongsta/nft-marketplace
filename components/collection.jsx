import { useState, useEffect } from "react";
import trendPlaceholder from "../public/images/Trending-Placeholder.png";

export default function Collection() {
  const [data, setData] = useState();
  return (
    <div className="container flex flex-row">
      <div className="section-img basis-1/5">hello</div>
      <div className="section-stats basis-2/5">stats</div>
      <div className="section-info basis-2/5">info</div>
    </div>
  );
}
