import { Alchemy, Network } from "alchemy-sdk";
import useSWR from "swr";

const config = {
  apiKey: "gpp3BgjyZPndnfRM4Hnvt5ESKBAc3mAb",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const fetcher = async () => {
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
};

function testSWR() {
  const { data, error } = useSWR("arg", fetcher);
  return data;
}

const main = async () => {
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
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default testSWR;
