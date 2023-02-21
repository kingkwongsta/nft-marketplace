import { Alchemy, Network } from "alchemy-sdk";
import useSWR from "swr";

const config = {
  apiKey: "gpp3BgjyZPndnfRM4Hnvt5ESKBAc3mAb",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {
  //   BAYC address
  const BAYCAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
  const PunkAddress = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

  // Flag to omit metadata
  const omitMetadata = false;

  // Get all NFTs
  const { nfts } = await alchemy.nft.getNftsForContract(BAYCAddress, {
    omitMetadata: omitMetadata,
  });

  //store image urls in array
  let i = 0;
  let nftStore = [];

  for (let nft of nfts) {
    let temp = nft.rawMetadata.image.slice(7);
    nftStore[i] = `https://ipfs.io/ipfs/${temp}`;
    i++;
  }
  return nftStore;
};

async function test() {
  //   Contract address
  const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

  // Flag to omit metadata
  const omitMetadata = false;

  // Get all NFTs
  const { nfts } = await alchemy.nft.getNftsForContract(address, {
    omitMetadata: omitMetadata,
  });

  //store image urls in array
  let i = 0;
  let nftStore = [];

  for (let nft of nfts) {
    let temp = nft.rawMetadata.image.slice(7);
    nftStore[i] = `https://ipfs.io/ipfs/${temp}`;
    i++;
  }
  return nftStore;
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default test;
