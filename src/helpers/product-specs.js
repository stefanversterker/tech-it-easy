/*import check from "../assets/check.png";
import inventory from "../constants/inventory.js"*/

export function productOptions(array) {
    return array.map(productName);
}

export function productName(inventoryElement) {
    return inventoryElement.options.map(optionName);
}

export function optionName(option) {
    return option.name;
}




  /*{array.map((product) => {
        return product.options.map((option) => {
            return<li className="specs-list" key={product.type}>{option.name}</li>
        })
    })}
    <img className="icons" src={check} alt="check"/>*/

export default productOptions;
