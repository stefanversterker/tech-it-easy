


function productsSold(array) {
    let sales = 0
    for (let i = 0; i < array.length; i++) {
        sales += array[i].sold
    }
    return sales;
}

export default productsSold;


