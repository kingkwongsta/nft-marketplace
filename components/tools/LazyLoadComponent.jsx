//Get data from NFTPort by temporarily enabling this component
import { useState, useEffect } from "react";

import Popular from "../popular/popular";

export default function LazyLoadComponent({ component }) {
  const [data, setData] = useState(true);

  const handleClick = () => {
    setData(!data);
    console.log(data);
  };

  return (
    <div className="text-center">
      <button
        className=" flex text-xl mb-12 bg-violet-600 w-56 py-[13px] m-32 rounded-2xl"
        type="button"
        onClick={handleClick}
      >
        Show Component
      </button>
      <div>{data ? <p>Click Above</p> : <Popular />}</div>
    </div>
  );
}
