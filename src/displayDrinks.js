import getElement from "./getElement.js";
import { hideLoading } from "./loading.js";

const displayDrinks = ({ drinks }) => {
  // console.log(drinks);

  const cocktails__box = getElement(".cocktails__box");
  const err = getElement(".cocktails__err-title");

  if (!drinks) {
    hideLoading();
    cocktails__box.innerHTML = "";
    err.textContent = "there was an error";
    // ,A in search form
    setTimeout(() => {
      window.location.replace("./");
    }, 3000);
    return;
  }

  const newDrinks = drinks
    .map((item) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = item;

      return `<a href="./drink.html">
        <div class="cocktails__box-item cocktail" data-id="${id}">
          <img src="${image}" class="cocktail__img" alt="${name}" />
          <h2 class="cocktails__box-title cocktail-title">${name}</h2>
        </div>
      </a>`;
    })
    .join("");

  hideLoading();
  cocktails__box.innerHTML = newDrinks;
  err.textContent = "";
  return cocktails__box;
};

export default displayDrinks;
