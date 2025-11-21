import {inventory} from '../constants/inventory.js';
import productTitle from "../helpers/product-name.js";
import productPrice from "../helpers/product-price.js";
import productSizes from "../helpers/product-sizes.js";
import check from "../assets/check.png";
/*import not from "../assets/minus.png";*/

function Product(array) {
    return (
        <ul>
            {array.map((product) => {
                return <li key={array.type}>
                    <div className="product-container">
                        <div className="top-seller-image-container">
                            <img className="product-image" src={product.sourceImg}
                                 alt={product.brand + " " + product.type + " tv"}/>
                        </div>
                        <article>
                            <div>{productTitle(product)}</div>
                            <div>{productPrice(product)}</div>
                            <div>{productSizes(product)}</div>
                            <div className="product-specs">
                                <ul>
                                    {inventory.map((product) => {
                                        return<li className="specs-list" key={product.type}>
                                            {product.options.map((option) => {
                                                return option.name
                                            })}
                                            <img className="icons" src={check} alt="check"/>
                                        </li>
                                    })}
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