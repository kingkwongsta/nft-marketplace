//Get data from NFTPort by temporarily enabling this component
import { getCollection, getSales, getTopNFT } from "../../pages/api/nftport";
import { useState, useEffect } from "react";

export default function DataFetcherNFTPort() {
  const [collection, setCollection] = useState();
  const [sales, setSales] = useState();
  const [topNFT, setTopNFT] = useState();

  useEffect(() => {
    loadData();
  }, []);

  //function to get data from NFTPort API Call file
  const loadData = async () => {
    // const response = await getCollection();
    // const response2 = await getSales();
    const response3 = await getTopNFT();
    // setCollection(response);
    // setSales(response2);
    setTopNFT(response3);
  };

  const handleClick = () => {
    console.log(topNFT.contracts);
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
