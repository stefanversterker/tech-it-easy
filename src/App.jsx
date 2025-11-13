import './App.css';
import {bestSellingTv, inventory} from './constants/inventory.js';
import productsSold from './helpers/products-sold.js';
import productsPurchased from './helpers/products-purchased.js';
import productsStock from "./helpers/products-stock.js";
import productTitle from "./helpers/product-name.js";
import productPrice from "./helpers/product-price.js";
import productSizes from "./helpers/product-sizes.js";
import check from './assets/check.png';
import not from './assets/minus.png'


function App() {
    return (
        <div className="everything">
            <header>
                <h1>Tech it easy dashboard</h1>
            </header>
            <main className="all-tiles">
                <div>
                    <h2>Verkoopoverzicht</h2>
                </div>
                <section>

                    <div className="info-tile-container">
                        <article className="info-tile green-tile">
                            <div>
                                <h2>Aantal verkochte producten</h2>
                            </div>
                            <div>
                                <h2>{productsSold(inventory)}</h2>
                            </div>
                        </article>
                        <article className="info-tile blue-tile">
                            <div>
                                <h2>Aantal ingekochte producten</h2>
                            </div>
                            <div>
                                <h2>{productsPurchased(inventory)}</h2>
                            </div>
                        </article>
                        <article className="info-tile red-tile">
                            <div>
                                <h2>Aantal te verkopen producten</h2>
                            </div>
                            <div>
                                <h2>{productsStock(inventory)}</h2>
                            </div>
                        </article>
                    </div>
                </section>
                <div>
                    <h2>Best verkochte tv</h2>
                </div>
                <section>

                    <div className="top-seller">
                        <div className="top-seller-image"><img src="https://image.coolblue.nl/max/500x500/products/1786196" alt="tv"/></div>
                        <article>
                            <div>{productTitle(bestSellingTv)}</div>
                            <div>{productPrice(bestSellingTv)}</div>
                            <div>{productSizes(bestSellingTv)}</div>
                            <div className="product-specs">
                                <img className="icons" src={check} alt="check icon"/>
                                <p>wifi</p>
                                <img className="icons" src={not} alt="not-icon"/>
                                <p>speech</p>
                                <img className="icons" src={check} alt="check icon"/>
                                <p>hdr</p>
                                <img className="icons" src={check} alt="check icon"/>
                                <p>bluetooth</p>
                                <img className="icons" src={not} alt="not-icon"/>
                                <p>ambilight</p>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App
