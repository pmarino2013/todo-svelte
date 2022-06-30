const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1b67e2c736msha96cc59c1a1a7b1p17b5eajsn79692a75debf",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

export const getData = async (country = "") => {
  if (!country) {
    country = "Argentina";
  }
  try {
    const resp = await fetch(
      `https://covid-193.p.rapidapi.com/statistics?country=${country}`,
      options
    );
    const data = await resp.json();

    return data;
  } catch (error) {
    return error;
  }
};
