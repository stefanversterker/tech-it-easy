import {inventory} from '../constants/inventory.js';
import productsSold from '/products-sold.js';
import productsPurchased from '/products-purchased.js';


function productsStock() {
    return productsPurchased(inventory) - productsSold(inventory);
}

export default productsStock;