import Hero from "@/components/hero";
import LazyLoadComponent from "@/components/tools/LazyLoadComponent";
import Popular from "@/components/popular";
import { useState } from "react";

export default function HomePage() {
  const [showPopular, setPopularShow] = useState(true);
  //DELAYED DISPLAY
  useState(() => {
    setTimeout(() => {
      setPopularShow((x) => !x);
    }, 1000);
  });

  //SCROLL TO DISPLAY
  function handleScroll(event) {
    setPopularShow((x) => !x);
    console.log(event);
  }

  return (
    <div className="">
      <Hero />
      {showPopular ? <></> : <Popular />}
    </div>
  );
}
