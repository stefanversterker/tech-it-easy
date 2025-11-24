import productTitle from "../helpers/product-name.js";
import productPrice from "../helpers/product-price.js";
import productSizes from "../helpers/product-sizes.js";
/*import imageSelect from "../helpers/product-image.js";*/
/*import productOptions from "../helpers/product-specs.js"*/
import check from "../assets/check.png";
import minus from "../assets/minus.png";
/*import {inventory} from "../constants/inventory.js";*/
import out_of_stock from "../assets/out_of_stock.png"
/*import not from "../assets/minus.png";*/

function Product(array) {
    return (
        <ul>
            {array.map((product) => {
                return <li key={array.type}>
                    <div className="product-container">
                        <div className="top-seller-image-container">
                            {product.originalStock - product.sold >0 &&
                            <img className="product-image" src={product.sourceImg} alt={product.brand + " " + product.type + " tv"}/>}
                            {product.originalStock  - product.sold === 0 &&
                            <img className="sold-out-image" src={out_of_stock} alt="Out of stock"/>}
                        </div>
                        <article>
                            <div>{productTitle(product)}</div>
                            <div>{productPrice(product)}</div>
                            <div>{productSizes(product)}</div>
                            <div>
                                <ul className="product-specs">
                                    {product.options.map((option) => {
                                        return <li key={array.type}>{option.name}
                                            {option.applicable &&
                                            <img className="icons" src={check} alt="available option"/>}
                                            {option.applicable === false &&
                                            <img className="icons" src={minus} alt="available option"/>}
                                            </li>
                                            })
                                    }
                                </ul>
                            </div>
                        </article>
                    </div>
                </li>
            })}
        </ul>
    )
}

export default Product;