import { useState, useEffect } from "react";
import fetchData from "../pages/api/nft";

export default function DataFetcher() {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetchData();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => console.log(data);

  return (
    <div className="text-center">
      <button
        className=" flex text-xl mb-12 bg-violet-600 w-56 py-[13px] m-32 rounded-2xl"
        type="button"
        onClick={handleClick}
      >
        Get Data
      </button>
    </div>
  );
}
