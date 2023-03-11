import Collection from "../../components/collection/collection";
import { useRouter } from "next/router";

export default function NFTCollectionPage() {
  const router = useRouter();
  const nftcollection = router.query.nftcollection;
  return (
    <>
      {/* Pass NFT Collection Name As Prop */}
      {/* NFT Name must have no spaces, one word */}
      <Collection nftcollection={nftcollection} />
    </>
  );
}
