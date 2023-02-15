import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Trending() {
  return (
    <div className="trending">
      <h2 className="trending-title">Trending Collection</h2>
      <h3 className="trending-desc">
        Checkout Our Weekly Updated Trending Collection.
      </h3>
      <Container className="trending-collection">
        <Row>
          <Col sm={4}>Test</Col>
          <Col sm={4}>Test</Col>
          <Col sm={4}>Test</Col>
        </Row>
      </Container>
    </div>
  );
}
