
function productsStock(array) {
    let stock = 0;
    for (let i = 0; i < array.length; i++) {
        stock += array[i].originalStock - array[i].sold;
    }
    return stock;
}

export default productsStock;