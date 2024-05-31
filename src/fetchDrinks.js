import { showLoading } from "./loading.js";

const fetchDrinks = async (url) => {
  // console.log(url);
  try {
    showLoading();
    const resp = await fetch(url);

    if (!resp.ok) {
      throw Error("url not found");
    }

    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchDrinks;
