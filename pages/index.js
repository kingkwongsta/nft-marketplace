import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Trending from "../components/trending";
import Popular from "../components/popular";
import Collection from "@/components/collection";
import DataFetcher from "@/components/datafetcher";
import DataFetcherNFTPort from "@/components/dataFetcherNFTPort";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 10000,
    },
  },
});

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>NFT Browse</title>
        <meta name="description" content="The Best NFT Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        {/* <Navigation /> */}
        <DataFetcherNFTPort />
        {/* <Collection /> */}
        {/* <Hero />
        <Popular /> */}
        {/* <Trending /> */}
      </main>
    </QueryClientProvider>
  );
}
