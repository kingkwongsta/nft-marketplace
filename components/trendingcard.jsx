import React from "react";
import Image from "next/image";
import trendPlaceholder from "../public/images/Trending-Placeholder.png";
import styles from "./trending.module.css";

export default function TrendingCard({}) {
  return (
    <div className="trending-card">
      <Image src={trendPlaceholder} alt="absdf" width={350} />
      <div className="trending-card-second flex justify-between">
        <Image
          className={styles.smallImage}
          src={trendPlaceholder}
          alt="absdf"
        />
        <Image
          className={styles.smallImage}
          src={trendPlaceholder}
          alt="absdf"
        />
        <Image
          className={styles.smallImage}
          src={trendPlaceholder}
          alt="absdf"
        />
      </div>
      <div className="trending-card-info">
        <h3 className="trending-collection-name">DSGN Animals</h3>
        <div className="trending-collection-info">
          <Image src={trendPlaceholder} alt="weree" width={50} />
          <span className="trending-collection-creator">MrFox</span>
        </div>
      </div>
    </div>
  );
}
