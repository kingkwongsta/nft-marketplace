import { useState, useEffect } from "react";
import { nftData, salesData } from "../pages/api/nftPortData";
import CollectionInfo from "./collectioninfo";
import { getSales, getCollection } from "../pages/api/nftport.js";

export default function Collection() {
  const [salesData, setSalesData] = useState();

  useEffect(() => {
    getSalesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSalesData = async () => {
    try {
      const res = await getSales();
      setSalesData(res);
    } catch (err) {
      console.log(err);
    }
  };

  // const collectionName = nftData.contract.name
  //   .replace(/([A-Z])/g, " $1")
  //   .trim();

  // const index = data2.findIndex((x) => x.collection === collectionName);
  // console.log(index);

  // function renderCollection() {
  //   return nftData.nfts.map((nft, index) => {
  //     return (
  //       <div className="card" key={index}>
  //         <Image
  //           src={nft.cached_file_url}
  //           width="250"
  //           height="250"
  //           alt="bayc"
  //         />
  //         <p className="text-lg my-2 mb-8">#{nft.token_id}</p>
  //       </div>
  //     );
  //   });
  // }

  return (
    <div className="mx-36">
      <div>
        {/* <CollectionInfo salesData={salesData} nftData={nftData} /> */}
      </div>
      <div className="collection-imgs grid grid-cols-4">
        {/* {renderCollection()} */}
      </div>
    </div>
  );
}
