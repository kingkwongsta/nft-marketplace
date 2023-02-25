export async function stuff() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "671f012a-921d-43d6-9b84-2a2421525c1f",
    },
  };

  const response = await fetch(
    "https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum&page_number=1&page_size=50&include=metadata&refresh_metadata=false",
    options
  );
  const nftData = await response.json();

  return nftData;
}

export default stuff;
