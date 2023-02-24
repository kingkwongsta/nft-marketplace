import { useState, useEffect } from "react";
import fetchData from "../pages/api/nft";

export default function DataFetcher() {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const nftContracts = [
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
      const response = await fetchData();
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
