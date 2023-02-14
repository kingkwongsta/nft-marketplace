import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/navigation";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="The Best NFT Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <Hero />
      </main>
    </>
  );
}
