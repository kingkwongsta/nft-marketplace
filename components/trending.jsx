import React from "react";
import TrendingCard from "./trendingcard";
import fetchData from "../pages/api/nft.js";
// import test from "../pages/api/test.js";

export default function Trending() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetcher();
  }, []);

  const fetcher = async () => {
    try {
      const res = await fetchData();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  function renderTrendingCards() {
    const trendingCardElements = [0, 1, 2];
    return trendingCardElements.map((x, key) => {
      return (
        <TrendingCard
          key={key}
          img={data[x].img}
          collection={data[x].collection}
          desc={data[x].desc}
        />
      );
    });
  }
  //Testing fetchdad
  function handleClick() {
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
        {/* {data == null ? <div>loading</div> : renderTrendingCards()} */}
      </div>
    </div>
  );
}
