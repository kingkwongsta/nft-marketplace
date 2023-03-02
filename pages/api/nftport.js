const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "671f012a-921d-43d6-9b84-2a2421525c1f",
  },
};
export async function getCollection(address) {
  const response = await fetch(
    `https://api.nftport.xyz/v0/nfts/${address}?chain=ethereum&page_number=1&page_size=50&include=metadata&refresh_metadata=false`,
    options
  );
  const nftData = await response.json();

  return nftData;
}

export async function getSales(address) {
  const response = await fetch(
    `https://api.nftport.xyz/v0/transactions/stats/${address}?chain=ethereum`,
    options
  );

  const nftData = await response.json();

  return nftData;
}

export async function getTopNFT() {
  const response = await fetch(
    "https://api.nftport.xyz/v0/contracts/top?page_size=10&page_number=1&period=24h&order_by=volume&chain=ethereum",
    options
  );
  fetch(
    "https://api.nftport.xyz/v0/contracts/top?page_size=10&page_number=1&period=24h&order_by=volume&chain=ethereum&chain=polygon",
    options
  );
  const data = await response.json();
  return data;
}
