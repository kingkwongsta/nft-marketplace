const test = async () => {
  console.log("fetching data");
  const res = await fetch("https://api.artic.edu/api/v1/artworks/129884");
  const data = await res.json();
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data;
};

async function test2() {
  console.log("fetching data");
  const res = await fetch("https://api.artic.edu/api/v1/artworks/129884");
  const data = await res.json();
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return data;
}

export default test2;
