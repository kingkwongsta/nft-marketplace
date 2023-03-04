import { useState, useEffect } from "react";
import Image from "next/image";
//HARDCODED DATA FROM API CALLS
// import { nftData, salesData } from "../pages/api/nftPortData";
import CollectionInfo from "./collectioninfo";
import { getSales, getCollection } from "../pages/api/nftport.js";
import topNFTData from "../pages/api/topNFTData";

const address = [
  { name: "BAYC", address: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D" },
  { name: "Azuki", address: "0xED5AF388653567Af2F388E6224dC7C4b3241C544" },
  { name: "Doodles", address: "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e" },
  {
    name: "BoredApeKennelClub",
    address: "0xba30e5f9bb24caa003e9f2f0497ad287fdf95623",
  },
  {
    name: "MGLand",
    address: "0xe75512aa3bec8f00434bbd6ad8b0a3fbff100ad6",
  },
];

export default function Collection({ nftcollection }) {
  const [salesData, setSalesData] = useState();
  const [nftData, setNFTData] = useState();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    try {
      //FIND WHICH INDEX HAS THE DATA
      const index = topNFTData
        .map((x) => {
          return x.name;
        })
        .indexOf(nftcollection);
      const res = await getSales(topNFTData[index].contract_address);
      setTimeout(async () => {
        const res2 = await getCollection(topNFTData[index].contract_address);
        setNFTData(res2);
      }, 1000);
      setSalesData(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  function renderCollection() {
    console.log(nftData);
    return nftData.nfts.map((nft, index) => {
      return (
        <div className="card" key={index}>
          {nft.cached_file_url && (
            <Image
              className=""
              src={nft.cached_file_url}
              width="250"
              height="250"
              alt="bayc"
            />
          )}
          {/* <p>{nft.cached_file_url}</p> */}
          <p className="text-lg my-2 mb-8">#{nft.token_id}</p>
        </div>
      );
    });
  }

  return (
    <div className="mx-36">
      <div>
        {nftData === undefined ? (
          <p>Loading Due to API Rate Limit</p>
        ) : (
          <CollectionInfo salesData={salesData} nftData={nftData} />
        )}
      </div>
      <div className="collection-imgs grid grid-cols-4">
        {nftData === undefined ? <p>Loading</p> : renderCollection()}
      </div>
    </div>
  );
}
