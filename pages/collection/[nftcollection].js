import Collection from "@/components/collection";
import { useRouter } from "next/router";

export default function CollectionDetail() {
  const router = useRouter();
  const nftcollection = router.query.nftcollection;
  return (
    <>
      <p>{nftcollection}</p>
      <Collection nftcollection={nftcollection} />
    </>
  );
}
