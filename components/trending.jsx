import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TrendingCard from "./trendingcard";
import styles from "./trending.module.css";
import { Container } from "react-bootstrap";

export default function Trending() {
  function renderTrendingCards() {
    const trendingCardElements = [1, 2, 3];
    return trendingCardElements.map(() => {
      return <TrendingCard />;
    });
  }
  return (
    <div className="trending mt-32 mx-36 mb-16">
      <h2 className="text-4xl font-semibold tracking-wide mb-4">
        Trending Collection
      </h2>
      <h3 className="text-2xl font-normal tracking-wide mb-14">
        Checkout Our Weekly Updated Trending Collection.
      </h3>
      <div className="trending-collection flex">{renderTrendingCards()}</div>
    </div>
  );
}
