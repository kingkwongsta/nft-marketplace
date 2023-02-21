import { Alchemy, Network } from "alchemy-sdk";
import useSWR from "swr";

const config = {
  apiKey: "gpp3BgjyZPndnfRM4Hnvt5ESKBAc3mAb",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

async function test() {
  //   BAYC address
  const BAYCAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
  const AzukiAddress = "0xED5AF388653567Af2F388E6224dC7C4b3241C544";
  const Doodles = "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e";
  const NFTAddress = [BAYCAddress, AzukiAddress, Doodles];
  const NFTData = [];

  // Flag to omit metadata
  const omitMetadata = false;

  for (let i = 0; i < NFTAddress.length; i++) {
    let { nfts } = await alchemy.nft.getNftsForContract(NFTAddress[i], {
      omitMetadata: omitMetadata,
    });

    //store image urls in array
    let k = 0;
    let nftStore = [];

    for (let nft of nfts) {
      let temp = nft.rawMetadata.image.slice(7);
      nftStore[k] = `https://ipfs.io/ipfs/${temp}`;
      k++;
    }
    NFTData.push({
      address: NFTAddress[i],
      img: nftStore,
      all: nfts,
    });
  }
  return NFTData;
}

export default test;
