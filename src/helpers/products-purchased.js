


function productsPurchased(array) {
    let sales = 0
    for (let i = 0; i < array.length; i++) {
        sales += array[i].originalStock
    }
    return sales;
}

export default productsPurchased;


