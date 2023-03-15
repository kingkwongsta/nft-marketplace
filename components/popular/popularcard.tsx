import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type PopularCardProps = {
  nft: {
    name: string;
    metadata: {
      thumbnail_url: string;
    };
  };
};

export default function PopularCard({ nft }: PopularCardProps) {
  return (
    <div className="min-w-[260px] text-center bg-zinc-700 rounded-lg mb-5 pb-5">
      {/* Each card links to the collection page by passing name prop */}
      <Link href={`/collection/${nft.name}`}>
        <Image
          className="max-w-[200px] min-h-[200px] max-h-[200px] block m-auto mt-6 rounded-md mb-5"
          src={nft.metadata.thumbnail_url}
          alt="test"
          width={200}
          height={200}
        />
      </Link>
      <p className="text-2xl font-medium mb-2">
        {nft.name.replace(/([A-Z])/g, " $1").trim()}
      </p>
      {/* <p className="text-xl text-slate-300	">
        Floor Price: <span className="">{data.floor} ETH</span>
      </p> */}
    </div>
  );
}
