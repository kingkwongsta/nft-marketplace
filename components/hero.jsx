import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import heroImage from "../public/images/Image Placeholder.png";

export default function Hero() {
  return (
    <div className="hero">
      <div>
        <div sm={7}>
          <h1 className="hero-title">Discover Digital Art & Collect NFTs</h1>
          <h3 className="hero-desc">
            A NFT Marketplace to discovery, buy, and sell. This is an example
            for my Portfolio.
          </h3>
          <Button className="button-secondary" variant="primary">
            Get Started
          </Button>{" "}
          <div className="hero-stats">
            <ul className="hero-stats-list">
              <li>
                <span className="hero-stats-num">900+</span>
                <br />
                <span className="hero-stats-name">Sold</span>
              </li>
              <li>
                <span className="hero-stats-num">2800+</span>
                <br />
                <span className="hero-stats-name">Auctions</span>
              </li>
              <li>
                <span className="hero-stats-num">350+</span>
                <br />
                <span className="hero-stats-name">Artist</span>
              </li>
            </ul>
          </div>
        </div>
        <div sm={5}>
          <div className="hero-img">
            <Image
              src={heroImage}
              style={{ position: "relative", width: "100%", height: "100%" }}
            />
            <div>
              <h3>Space Walking</h3>
              <h4>Artist Here</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
