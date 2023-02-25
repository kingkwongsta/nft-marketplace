import getCollection from "../pages/api/nftport";
import { useState, useEffect } from "react";

export default function DataFetcherNFTPort() {
  const [data, setData] = useState();
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await getCollection();
    setData(response);
  };

  const handleClick = () => console.log(data.contract);

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
