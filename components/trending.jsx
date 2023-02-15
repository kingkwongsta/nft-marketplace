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
      return (
        <Col sm={4}>
          <TrendingCard />
        </Col>
      );
    });
  }
  return (
    <div className="trending">
      <h2 className={styles.title}>Trending Collection</h2>
      <h3 className={styles.desc}>
        Checkout Our Weekly Updated Trending Collection.
      </h3>
      {/* <div className="trending-collection">
        <Row>{renderTrendingCards()}</Row>
      </div> */}
      <div
        className="trending-collection"
        style={{ margin: 0, padding: 0, width: 1050 }}
      >
        <Row>{renderTrendingCards()}</Row>
      </div>
    </div>
  );
}
