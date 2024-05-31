const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (!element) {
    throw Error("element not found");
  }

  return element;
};

export default getElement;
