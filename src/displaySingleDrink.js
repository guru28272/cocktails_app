import getElement from "./getElement.js";
import { hideLoading } from "./loading.js";

const displaySingleDrink = ({ drinks }) => {
  //   console.log(drinks);

  const img = getElement(".drink-img");
  const title = getElement(".drink-title");
  const description = getElement(".drink-desc");
  const ingredients = getElement(".drink-ingredients");

  const [
    {
      strDrink: name,
      strDrinkThumb: image,
      strInstructionsDE: desc,

      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    },
  ] = drinks;

  const list = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];

  hideLoading();

  img.src = image;
  title.textContent = name;
  description.textContent = desc;

  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;

      return `<li><span class="material-symbols-outlined list-icon">check_circle</span>${item}</li>`;
    })
    .join("");
};

export default displaySingleDrink;
