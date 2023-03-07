import Popular from "@/components/popular/popular";
import dynamic from "next/dynamic";

//Turn off SSR for component
const ComponentWithNoSSR = dynamic(
  () => import("@/components/popular/popular"),
  {
    ssr: false,
  }
);

export default function PopularPage() {
  return (
    <>
      <ComponentWithNoSSR>
        <Popular />
      </ComponentWithNoSSR>
    </>
  );
}
