import {inventory} from '../constants/inventory.js';


// Tech it easy deel 2 opdracht 3a

export function sortSales() { inventory.sort((a, b) => {
    if (a.sold > b.sold) {
        return -1;
    } else if (a.sold < b.sold)
        return 1;
    console.log(inventory)
})}

// Tech it easy deel 2 opdracht 3b

export function sortPrice() { inventory.sort((a, b) => {
    if (a.price > b.price) {
        return 1;
    } else if (a.price < b.price)
        return -1;
    console.log(inventory)
})}

// Tech it easy deel 2 opdracht 3c

export function sortRefreshRate() { inventory.sort((a, b) => {
    if (a.refreshRate > b.refreshRate) {
        return -1;
    } else if (a.refreshRate < b.refreshRate)
        return 1;
        console.log(inventory)
})}

export function sortBigTV() { inventory.sort((a, b) => {
    if (a.availableSizes.at(-1) > b.availableSizes.at(-1)){
        return 1;
    } else if (a.availableSizes.at(-1) < b.availableSizes.at(-1)) {
        return -1;
    }
})}



