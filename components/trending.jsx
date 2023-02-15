import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TrendingCard from "./trendingcard";

export default function Trending() {
  function renderTrendingCards() {
    const trendingCardElements = [1, 2, 3];
    return trendingCardElements.map(() => {
      return (
        <Col sm={4}>
          <TrendingCard />
        </Col>
      );
    });
  }
  return (
    <div className="trending">
      <h2 className="trending-title">Trending Collection</h2>
      <h3 className="trending-desc">
        Checkout Our Weekly Updated Trending Collection.
      </h3>
      <div className="trending-collection">
        <Row>{renderTrendingCards()}</Row>
      </div>
    </div>
  );
}
