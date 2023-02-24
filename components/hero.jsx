import React from "react";
import Image from "next/image";
import heroImage from "../public/images/Image Placeholder.png";
import rocket from "../public/images/rocket.png";
import artistIcon from "../public/images/Artist Icon Placeholder.png";
import data from "../pages/api/cleanNFTData";

export default function Hero() {
  return (
    <div className="hero flex mt-36 mx-36 mb-20">
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
      <div className="hero-right flex-auto basis-1/2 ">
        <div className="hero-img">
          <Image
            src={data[0].img[0]}
            width={510}
            height={401}
            alt="heroImage"
            className="w-full"
            // style={{ position: "relative", width: "100%", height: "100%" }}
          />
          <div className="bg-zinc-700 rounded-b-lg h-28">
            <h3 className="ml-6 pt-5 text-2xl font-semibold">Space Walking</h3>
            <h4 className="flex ml-6 pt-2 text-lg">
              <Image
                src={artistIcon}
                alt="Artist Icon"
                className="w-6 h-6 mt-[3px] mr-3"
              />{" "}
              Artist Here
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
