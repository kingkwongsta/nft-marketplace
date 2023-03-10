import "../styles/globals.css";
import { useEffect } from "react";
import { Inter, Work_Sans } from "@next/font/google";
import { Lora } from "@next/font/google";
import Navigation from "../components/navigation";

const lora = Lora({
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });
const work = Work_Sans({ subsets: ["latin"] });
// const roboto = Roboto({ subsets: ["latin"], display: "fallback" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --lora-font: ${lora.style.fontFamily};
          }
        `}
      </style>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
