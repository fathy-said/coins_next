import { NextResponse } from "next/server";

// export async function fetchCoins() {
//   const options = {
//     method: "GET",
//     url: "https://coinranking1.p.rapidapi.com/coins",
//     params: {
//       referenceCurrencyUuid: "yhjMzLPhuIDl",
//       timePeriod: "24h",
//       "tiers[0]": "1",
//       orderBy: "marketCap",
//       orderDirection: "desc",
//       limit: "50",
//       offset: "0",
//     },
//     headers: {
//       "X-RapidAPI-Key": "d83d98d51amsha9df4824370aceep1c3b02jsnfe37221b204d",
//       "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//     },
//   };
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// }

// export async function GET(request) {
//   let coins = await fetchCoins();
//   return NextResponse.json(coins);
// }
// ===============================================================
async function fetchCoins() {
  const response = await fetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d83d98d51amsha9df4824370aceep1c3b02jsnfe37221b204d",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    }
  );

  const coins = await response.json();
  return coins;
}

export async function GET(request) {
  const coins = await fetchCoins();
  return NextResponse.json(coins);
}
