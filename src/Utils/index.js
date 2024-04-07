// **
// * @description: This function calculates the total price of the new order
// * @param {Array} products
// * @return: {Number} total price
// **

export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum;
};
