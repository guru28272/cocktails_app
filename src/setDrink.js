const setDrink = (section) => {
  section.addEventListener("click", (e) => {
    const id = e.target.parentElement.dataset.id;
    // console.log(e.target);

    localStorage.setItem("drink", id);
  });
};

export default setDrink;
