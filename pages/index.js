import Head from "next/head";
import HomePage from "./HomePage";
import Image from "next/image";
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Trending from "../components/trending";
import Popular from "../components/popular";
import Collection from "@/components/collection/collection";
import DataFetcher from "@/components/tools/datafetcher";
import DataFetcherNFTPort from "@/components/tools/dataFetcherNFTPort";
import LazyLoadComponent from "@/components/tools/LazyLoadComponent";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Browse</title>
        <meta name="description" content="The Best NFT Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          <Link href="/collection/">Hello</Link>
        </p>
        <HomePage />
      </main>
    </>
  );
}
