import displaySingleDrink from "./displaySingleDrink.js";
import fetchDrinks from "./fetchDrinks.js";

const idUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

window.addEventListener("DOMContentLoaded", async () => {
  const id = localStorage.getItem("drink");

  if (!id) {
    window.location.replace("./");
  }

  const drink = await fetchDrinks(`${idUrl}${id}`);
  displaySingleDrink(drink);
});
