import Head from "next/head";
import PopularPage from "./popular/index";
import Link from "next/link";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Browse</title>
        <meta name="description" content="The Best NFT Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Hero />
        <PopularPage />
      </main>
    </>
  );
}
