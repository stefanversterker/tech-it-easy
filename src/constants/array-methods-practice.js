// oefenbestand.js
import {inventory} from './inventory.js';

// 1a

const televisionTypes = inventory.map((product) => {
    return product.type;
});

// 1b

const televisionsSoldOut = inventory.filter((product) => {
    return product.sold === product.originalStock;
});

// 1c

const nh3216smart = inventory.find((product) => {
    return product.type === 'NH3216SMART';
})

// 1d

const sportTV = inventory.map((product) => {
    if (product.refreshRate >= 100) {
        return `${product.name}, suitable: true`
    } else {
        return `${product.name}, suitable: false`
    }
})

// 1e

// Loop alle producten in Inventory na met map
// Loop bij iedere iteratie de availableSizes array binnen dat product door met find
// return het product als je een schermgrootte tegenkomt van 65 of groter


const bigTV = inventory.filter((product) => {
    return product.availableSizes.find((size) => {
        return size >= 65
    })
})

// 1f

/*function ambilightTV() {
    const results = []
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].options.at(-1).applicable === true) {
            results.push(inventory[i])
        }
    }
    return results;
}*/

// Mijn poging met array methods 💩

const ambilightTV = inventory.filter((product) => {
    return product.options.some((option) => {
        if (option.name === "ambiLight" && option.applicable === true) {
            return true
        }
    })
})


// Tech it easy deel 2 opdracht 3a

const sortSales = inventory.sort((a, b) => {
    if (a.sold > b.sold) {
        return 1;
    } else if (a.sold < b.sold)
        return -1;
})

// Tech it easy deel 2 opdracht 3b

const sortPrice = inventory.sort((a, b) => {
    if (a.price > b.price) {
        return 1;
    } else if (a.price < b.price)
        return -1;
})

// Tech it easy deel 2 opdracht 3c

const sortRefreshRate = inventory.sort((a, b) => {
    if (a.refreshRate > b.refreshRate) {
        return -1;
    } else if (a.refreshRate < b.refreshRate)
        return 1;
})

// bonus 1:

const sortBigTV = inventory.sort((a, b) => {
    if (a.availableSizes.at(-1) > b.availableSizes.at(-1)){
        return 1;
    } else if (a.availableSizes.at(-1) < b.availableSizes.at(-1)) {
        return -1;
    }
    })



function showOutcomeInConsole() {
    console.log("1a")
    console.log(televisionTypes);
    console.log("1b")
    console.log(televisionsSoldOut);
    console.log("1c")
    console.log(nh3216smart);
    console.log("1d")
    console.log(sportTV);
    console.log("1e")
    console.log(bigTV);
    console.log("1f")
    console.log(ambilightTV);
    console.log("2.3a")
    console.log(sortSales)
    console.log("2.3b")
    console.log(sortPrice)
    console.log("2.3c")
    console.log(sortRefreshRate)
    console.log("bonus 1")
    console.log(sortBigTV)
    console.log("bonus 2")
}

export default showOutcomeInConsole