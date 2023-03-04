import Collection from "@/components/collection/collection";
import { useRouter } from "next/router";

export default function NFTCollectionPage() {
  const router = useRouter();
  const nftcollection = router.query.nftcollection;
  return (
    <>
      {/* Pass NFT Collection Name As Prop */}
      <Collection nftcollection={nftcollection} />
    </>
  );
}
