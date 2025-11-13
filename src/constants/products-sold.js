/*import {inventory} from './inventory.js'*/

let sales = 0

function productsSold(array,id) {
    for (let i = 0; i < array.length; i++) {
        sales += array[i].sold
    }
    return document.getElementById(id).textContent= sales
}

export default productsSold;


