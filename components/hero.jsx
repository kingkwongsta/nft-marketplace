import { useState, useEffect } from "react";
import Image from "next/image";
import rocket from "../public/images/rocket.png";
import data from "../pages/api/topNFTData";
import Link from "next/link";

export default function Hero() {
  const [randomNum, setRandomNum] = useState(0);

  useEffect(() => {
    setRandomNum(Math.floor(Math.random() * 10));
  }, []);

  const description = data[randomNum].metadata.description.split(".");

  return (
    <div className="hero lg:flex mt-36 mx-36 mb-20">
      <div className="hero-left flex-auto basis-1/2 mr-12">
        <h1 className="text-6xl font-semibold tracking-wider leading-none mb-10">
          Discover Digital Art & Collect NFTs
        </h1>
        <h3 className="text-2xl mb-12 font-normal leading-normal">
          A NFT Marketplace to discovery, buy, and sell. This is an example for
          my Portfolio.
        </h3>
        <button
          className=" flex text-xl mb-12 bg-violet-600 w-56 py-[13px] rounded-2xl"
          type="button"
        >
          <Image src={rocket} alt="rocket" className="w-6 ml-7 mr-3 mt-.5" />{" "}
          Get Started
        </button>
        <div className="hero-stats">
          <ul className="flex justify-between">
            <li className="pr-5">
              <p className="text-2xl font-medium font-mono mb-2">900+</p>
              <p className="text-2xl">Sold</p>
            </li>
            <li className="pr-5">
              <p className="text-2xl font-medium font-mono mb-2">2800+</p>
              <p className="text-2xl">Auctions</p>
            </li>
            <li className="pr-5">
              <p className="text-2xl font-medium font-mono mb-2">350+</p>
              <p className="text-2xl">Artist</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-right sm:max-lg:invisible sm:max-lg:h-0 sm:mt-10 lg:mt-0 flex-auto basis-1/2 justify-center h-[650px] sm:max-lg:max-h-[400px] bg-zinc-700">
        <div className="hero-img rounded-lg pt-10 px-16 w-[500px] ">
          <Link href={`/collection/${data[randomNum].name}`}>
            <Image
              src={data[randomNum].metadata.thumbnail_url}
              width={300}
              height={300}
              alt="heroImage"
              className="mx-auto rounded-lg w-full max-h-[300px] max-w-[300px]"
            />
          </Link>
          <div className="bg-zinc-700 rounded-lg">
            <h3 className="ml-6 pt-5 text-2xl font-semibold">
              {data[randomNum].name.replace(/([A-Z])/g, " $1").trim()}
            </h3>
            <h4 className="flex ml-6 pt-2 text-lg">
              {description[0]} {description[1]}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
