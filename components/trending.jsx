import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import trendPlaceholder from "../public/images/Trending-Placeholder.png";

export default function Trending() {
  return (
    <div className="trending">
      <h2 className="trending-title">Trending Collection</h2>
      <h3 className="trending-desc">
        Checkout Our Weekly Updated Trending Collection.
      </h3>
      <div className="trending-collection">
        <Row>
          <Col sm={4}>
            <Row>
              <Col sm={12}>
                <Image src={trendPlaceholder} />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>img</Col>
              <Col sm={4}>img</Col>
              <Col sm={4}>img</Col>
            </Row>
            <h3 className="trending-collection-name">DSGN Animals</h3>
            <div className="trending-collection-info">
              <Image src={trendPlaceholder} width={50} />
              <span className="trending-collection-creator">MrFox</span>
            </div>
          </Col>

          <Col sm={4}>Test</Col>
          <Col sm={4}>Test</Col>
        </Row>
      </div>
    </div>
  );
}
