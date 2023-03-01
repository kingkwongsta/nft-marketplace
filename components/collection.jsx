import { useState, useEffect } from "react";
// import { nftData, salesData } from "../pages/api/nftPortData";
import CollectionInfo from "./collectioninfo";
import { getSales, getCollection } from "../pages/api/nftport.js";

const address = [
  { name: "BAYC", address: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D" },
  { name: "Azuki", address: "0xED5AF388653567Af2F388E6224dC7C4b3241C544" },
  { name: "Doodles", address: "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e" },
];

export default function Collection() {
  const [salesData, setSalesData] = useState();
  const [nftData, setNFTData] = useState();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    try {
      const res = await getSales(address[2].address);
      const res2 = await getCollection(address[2].address);
      setSalesData(res);
      setNFTData(res2);
      console.log(res);
      console.log(res2);
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
        {salesData === undefined ? (
          <p>Loading</p>
        ) : (
          <CollectionInfo salesData={salesData} nftData={nftData} />
        )}
      </div>
      <div className="collection-imgs grid grid-cols-4">
        {/* {renderCollection()} */}
      </div>
    </div>
  );
}
