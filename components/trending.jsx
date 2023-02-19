import React from "react";
import TrendingCard from "./trendingcard";
import fetchData from "../pages/api/nft.js";

export default function Trending() {
  const [data, setData] = React.useState();
  const [enable, setEnable] = React.useState(0);
  fetchData();
  function renderTrendingCards() {
    const trendingCardElements = [1, 2, 3];
    return trendingCardElements.map((x, key) => {
      return <TrendingCard key={key} />;
    });
  }
  function handleClick() {
    setData(fetchData);
    console.log(data);
  }

  return (
    <div className="trending mt-32 mx-36 mb-16">
      <h2
        onClick={handleClick}
        className="text-4xl font-semibold tracking-wide mb-4"
      >
        Trending Collection
      </h2>
      <h3 className="text-2xl font-normal tracking-wide mb-14">
        Checkout Our Weekly Updated Trending Collection.
      </h3>
      <div className="trending-collection flex justify-between">
        {renderTrendingCards()}
      </div>
    </div>
  );
}
