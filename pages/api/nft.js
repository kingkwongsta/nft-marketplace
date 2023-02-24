import { Alchemy, Network } from "alchemy-sdk";
import useSWR from "swr";

const config = {
  apiKey: "gpp3BgjyZPndnfRM4Hnvt5ESKBAc3mAb",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

async function getCollection(nftContracts) {
  const NFTData = [];

  // Flag to omit metadata
  const omitMetadata = false;

  for (let i = 0; i < nftContracts.length; i++) {
    console.log("fetching data");
    let { nfts } = await alchemy.nft.getNftsForContract(
      nftContracts[i].address,
      {
        omitMetadata: omitMetadata,
      }
    );

    //store image urls in array
    let k = 0;
    let images = [];

    for (let nft of nfts) {
      let temp = nft.rawMetadata.image.slice(7);
      images[k] = `https://ipfs.io/ipfs/${temp}`;
      k++;
    }
    NFTData.push({
      address: nftContracts[i].address,
      img: images,
      collection: nfts[0].contract.openSea.collectionName,
      desc: nfts[0].contract.openSea.description,
    });
  }
  return NFTData;
}

//GET ALL DATA, NO TRANSFORM
async function allData() {
  const BAYCAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
  const omitMetadata = false;
  let { nfts } = await alchemy.nft.getNftsForContract(BAYCAddress, {
    omitMetadata: omitMetadata,
  });
  return nfts;
}

export default getCollection;
