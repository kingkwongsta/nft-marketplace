//Get data from NFTPort by temporarily enabling this component
import { getCollection, getSales } from "../pages/api/nftport";
import { useState, useEffect } from "react";

export default function DataFetcherNFTPort() {
  const [collection, setCollection] = useState();
  const [sales, setSales] = useState();

  useEffect(() => {
    loadData();
  }, []);

  //function to get data from NFTPort API Call file
  const loadData = async () => {
    const response = await getCollection();
    const response2 = await getSales();
    setCollection(response);
    setSales(response2);
  };

  const handleClick = () => {
    console.log(sales);
  };

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
