import axios from "axios";

export async function fetchData(Url_Sr) {
  // console.log(Url_Sr);
  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/${Url_Sr}`,
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "100",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "d83d98d51amsha9df4824370aceep1c3b02jsnfe37221b204d",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  try {
    // let response = await axios.get(Url_Sr, { cache: "no-store" });
    const response = await axios.request(options, { revalidate: 10 });
    let dataGet = response.data;
    // console.log(dataGet);
    return { error: false, dataGet: dataGet };
  } catch (error) {
    // console.log(error.message);
    return { error: error, dataGet: {} };
  }
}

export async function searchData(Url_Sr) {
  // console.log(Url_Sr);
  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/${Url_Sr}`,
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "100",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "d83d98d51amsha9df4824370aceep1c3b02jsnfe37221b204d",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  try {
    // let response = await axios.get(Url_Sr, { cache: "no-store" });
    // const response = await axios.request(options, { revalidate: 10 });
    const response = await axios.request(options, { cache: "no-store" });
    let dataGet = response.data;
    // console.log(dataGet);
    return { error: false, dataGet: dataGet };
  } catch (error) {
    // console.log(error.message);
    return { error: error, dataGet: {} };
  }
}
export async function fetchCoinDetail(Url_Sr) {
  // console.log(Url_Sr);
  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/${Url_Sr}`,
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
    },
    headers: {
      "X-RapidAPI-Key": "d83d98d51amsha9df4824370aceep1c3b02jsnfe37221b204d",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  try {
    // let response = await axios.get(Url_Sr, { cache: "no-store" });
    // const response = await axios.request(options, { revalidate: 10 });
    const response = await axios.request(options, { cache: "no-store" });
    let dataGet = response.data;
    // console.log(dataGet);
    return { error: false, dataGet: dataGet };
  } catch (error) {
    // console.log(error.message);
    return { error: error, dataGet: {} };
  }
}
