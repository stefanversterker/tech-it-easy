// oefenbestand.js
import { inventory } from './inventory.js';

const televisionTypes = inventory.map((product) => {
    return product.type;
});

const televisionsSoldOut = inventory.filter((product) => {
    return product.sold === product.originalStock;
});

const nh3216smart = inventory.find((product) => {
    return product.type === 'NH3216SMART';
})

const sportTV = inventory.map((product) => {
    if (product.refreshRate >= 100) {
        return `${product.name}, suitable: true`
    } else {
        return `${product.name}, suitable: false`
    }
})


// Loop alle producten in Inventory na met map
// Loop bij iedere iteratie de availableSizes array binnen dat product door met find
// return het product als je een schermgrootte tegenkomt van 65 of groter


function bigTV() {
    const results = []
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].availableSizes.at(-1) >= 65) {
            results.push(inventory[i])
        }
    }
    return results;
}

// Mijn poging met array methodes:

/*const bigTVs = inventory.map((product) => {
    const sizes = inventory.availableSizes.find((size) =>{
        return product
    })
})*/



function showOutcomeInConsole() {
    console.log(televisionTypes);
    console.log(televisionsSoldOut);
    console.log(nh3216smart);
    console.log(sportTV)
    console.log(bigTVs())
    console.log('1f')
}

export default showOutcomeInConsole