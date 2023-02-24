import { useState, useEffect } from "react";
import getCollection from "../pages/api/nft";

export default function DataFetcher() {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const nftContracts = [
    {
      name: "Bored Ape Yatch Club",
      address: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    },
    {
      name: "Azuki",
      address: "0xED5AF388653567Af2F388E6224dC7C4b3241C544",
    },
    {
      name: "Doodles",
      address: "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",
    },
    {
      name: "Bored Ape Kennel Club",
      address: "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
    },
    {
      name: "Meebits",
      address: "0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7",
    },
    {
      name: "Cool Cats",
      address: "0x1a92f7381b9f03921564a437210bb9396471050c",
    },
  ];

  const getData = async () => {
    try {
      const response = await getCollection(nftContracts);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => console.log(data);

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
