import { useState, useEffect } from "react";
import PopularCard from "./popularcard";
import data from "../../pages/api/topNFTData";

export default function Popular() {
  // function renderPopular() {
  //   const popularElements = [0, 1, 2, 3, 4, 5];
  //   return popularElements.map((x, key) => {
  //     return <PopularCard key={key} data={data[x]} />;
  //   });
  // }
  function renderPopular() {
    const shuffledData: Array<object> = shuffle(data);
    // // Non-random collection list
    // return data.map((nft, key) => {
    //   return <PopularCard key={key} nft={nft} />;
    // });
    // //Randomize collection list
    return shuffledData.map((nft, key) => {
      return <PopularCard key={key} nft={nft} />;
    });
  }

  function shuffle(array) {
    let m: number = array.length,
      t,
      i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  return (
    <>
      <div className="mx-36 mt-20 mb-20 font-Josefin">
        <h2 className="text-5xl font-semibold tracking-wider leading-none mb-5">
          Popular Collections
        </h2>
        <h3 className="text-2xl mb-12 font-normal leading-normal font-Josefin">
          Checkout the Top NFT Collections on the Ethereum Network
        </h3>
        <div className="grid grid-cols-3">{renderPopular()}</div>
      </div>
    </>
  );
}
