/*import {inventory} from './inventory.js'*/

let sales = 0

function productsSold(array) {
    for (let i = 0; i < array.length; i++) {
        sales += array[i].sold
    }
    return sales;
}

export default productsSold;


