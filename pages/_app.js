import "@/styles/globals.css";
import { useEffect } from "react";
import { Inter, Work_Sans } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const work = Work_Sans({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"], display: "fallback" });

export default function App({ Component, pageProps }) {
  return (
    <main className={work.className}>
      <Component {...pageProps} />
    </main>
  );
}
