import Hero from "@/components/hero";
import LazyLoadComponent from "@/components/tools/LazyLoadComponent";
import Popular from "@/components/popular";
import { useState } from "react";

export default function HomePage() {
  const [showPopular, setPopularShow] = useState(true);
  useState(() => {
    setTimeout(() => {
      setPopularShow((x) => !x);
    }, 1000);
  });

  return (
    <>
      <Hero />
      {showPopular ? <></> : <Popular />}
    </>
  );
}
