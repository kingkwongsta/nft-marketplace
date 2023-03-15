import { useState, useEffect } from "react";
import CollectionInfo from "./collectioninfo";
import Gallery from "./gallery";
//API CALLS
import { getSales, getCollection } from "../../pages/api/nftport.js";
import topNFTData from "../../pages/api/topNFTData";

export default function Collection({ nftcollection }) {
  //NFT Sales/Transaction Data - getSales API Call
  const [salesData, setSalesData] = useState();
  //NFT Image Data - getCollection API Call
  const [nftData, setNFTData] = useState();

  //Pull data from API calls on page render (once)
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Async function to get data from APIs
  const getData = async () => {
    try {
      //FIND WHICH INDEX HAS THE DATA
      const index = topNFTData
        .map((x) => {
          return x.name;
        })
        .indexOf(nftcollection);
      //Get Sales Data
      const res = await getSales(topNFTData[index].contract_address);
      //Get NFT Data - used time out due to rate limiting of API calls
      setTimeout(async () => {
        const res2 = await getCollection(topNFTData[index].contract_address);
        setNFTData(res2);
        console.log(res2);
      }, 200);
      setSalesData(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  function renderCollectionGallery() {
    return nftData.nfts.map((nft, index) => {
      return <Gallery key={index} nft={nft} />;
    });
  }

  return (
    <div className="mx-36 mt-20">
      <div>
        {nftData === undefined ? (
          <p>Loading</p>
        ) : (
          <CollectionInfo salesData={salesData} nftData={nftData} />
        )}
      </div>
      <div className="collection-imgs grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {nftData === undefined ? <p>Loading</p> : renderCollectionGallery()}
      </div>
    </div>
  );
}
