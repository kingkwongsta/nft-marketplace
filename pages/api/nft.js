import { Alchemy, Network } from "alchemy-sdk";
import useSWR from "swr";

const config = {
  apiKey: "gpp3BgjyZPndnfRM4Hnvt5ESKBAc3mAb",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

export async function getCollection(nftContracts) {
  const NFTData = [];

  // Flag to omit metadata
  const omitMetadata = false;
  const limit = 10;

  for (let i = 0; i < nftContracts.length; i++) {
    console.log("fetching data");
    let { nfts } = await alchemy.nft.getNftsForContract(
      nftContracts[i].address,
      {
        omitMetadata: omitMetadata,
      }
    );

    //store image urls in array
    let images = [];

    for (let i = 0; i < 10; i++) {
      // images[i] = nfts[i].media[i].gateway;
      images[i] = nfts[i].media[0].gateway;
    }
    NFTData.push({
      address: nftContracts[i].address,
      img: images,
      collection: nfts[0].contract.openSea.collectionName,
      desc: nfts[0].contract.openSea.description,
      floor: nfts[0].contract.openSea.floorPrice,
      supply: nfts[0].contract.totalSupply,
      discord: nfts[0].contract.openSea.discordUrl,
      website: nfts[0].contract.openSea.externalUrl,
      lastUpdated: nfts[0].contract.openSea.lastIngestedAt,
    });
  }

  //OLDER METHOD FOR GETTING IMAGE FROM METADATA KEY/Value
  //   for (let nft of nfts) {
  //     let temp = nft.rawMetadata.image.slice(7);
  //     images[k] = `https://ipfs.io/ipfs/${temp}`;
  //     k++;
  //   }
  //   NFTData.push({
  //     address: nftContracts[i].address,
  //     img: images,
  //     collection: nfts[0].contract.openSea.collectionName,
  //     desc: nfts[0].contract.openSea.description,
  //   });
  // }
  return NFTData;
}

//GET ALL DATA, NO TRANSFORM
export async function getAllData(nftContracts) {
  console.log("fetching data");
  const omitMetadata = false;
  const setLimit = 10;
  let { nfts } = await alchemy.nft.getNftsForContract(nftContracts, {
    omitMetadata: omitMetadata,
    limit: setLimit,
  });
  return nfts;
}
