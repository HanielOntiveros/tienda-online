/**
 * This function calculates the total of the price in a new order
 * @param {Array} products shoppingProducts 
 * @returns {Number} total price
 */

export const totalPrice = (products) => {
    return products.reduce((sum, product) => product.price + sum , 0)
    
}

