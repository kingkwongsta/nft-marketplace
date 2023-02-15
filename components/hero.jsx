import React from "react";
import Image from "next/image";
import heroImage from "../public/images/Image Placeholder.png";

export default function Hero() {
  return (
    <div className="hero flex m-20">
      <div className="hero-left flex-auto w-64">
        <h1 className="text-5xl font-medium tracking-wide mb-5">
          Discover Digital Art & Collect NFTs
        </h1>
        <h3 className="text-2xl mb-10">
          A NFT Marketplace to discovery, buy, and sell. This is an example for
          my Portfolio.
        </h3>
        <button className="text-xl mb-10" type="button">
          Get Started
        </button>{" "}
        <div className="hero-stats">
          <ul className="flex justify-between">
            <li className="pr-5">
              <span className="text-2xl font-medium">900+</span>
              <br />
              <span className="text-2xl">Sold</span>
            </li>
            <li className="pr-5">
              <span className="text-2xl font-medium">2800+</span>
              <br />
              <span className="text-2xl">Auctions</span>
            </li>
            <li className="pr-5">
              <span className="text-2xl font-medium">350+</span>
              <br />
              <span className="text-2xl">Artist</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-right flex-auto w-32">
        <div className="hero-img">
          <Image
            src={heroImage}
            // style={{ position: "relative", width: "100%", height: "100%" }}
          />
          <div>
            <h3>Space Walking</h3>
            <h4>Artist Here</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
