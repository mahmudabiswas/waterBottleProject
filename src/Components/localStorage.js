const getStoredCard = () => {
  const storedCartString = localStorage.getItem("card");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCardToLS = (cart) => {
  constcartStringified = JSON.stringify(card);
  localStorage.setItem("card", constcartStringified);
};

const addToLS = (id) => {
  const card = getStoredCard();
  card.push(id);
};

export { addToLS, getStoredCard };
