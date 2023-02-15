import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import trendPlaceholder from "../public/images/Trending-Placeholder.png";
import styles from "./trending.module.css";

export default function TrendingCard({}) {
  return (
    <div className="trending-card">
      <Row>
        <Col sm={12}>
          <Image src={trendPlaceholder} alt="absdf" width={330} />
        </Col>
      </Row>
      <Row>
        <Col className={styles.smallImgCont} sm={4}>
          <Image
            className={styles.smallImage}
            src={trendPlaceholder}
            alt="absdf"
          />
        </Col>
        <Col className={styles.smallImgCont} sm={4}>
          <Image
            className={styles.smallImage}
            src={trendPlaceholder}
            alt="absdf"
          />
        </Col>
        <Col className={styles.smallImgCont} sm={4}>
          <Image
            className={styles.smallImage}
            src={trendPlaceholder}
            alt="absdf"
          />
        </Col>
      </Row>
      <h3 className="trending-collection-name">DSGN Animals</h3>
      <div className="trending-collection-info">
        <Image src={trendPlaceholder} alt="weree" width={50} />
        <span className="trending-collection-creator">MrFox</span>
      </div>
    </div>
  );
}
