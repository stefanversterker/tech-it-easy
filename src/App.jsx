import './App.css';
import {bestSellingTv, inventory} from './constants/inventory.js';
import productsSold from './helpers/products-sold.js';
import productsPurchased from './helpers/products-purchased.js';
import productsStock from "./helpers/products-stock.js";
import productTitle from "./helpers/product-name.js";
import productPrice from "./helpers/product-price.js";
import productSizes from "./helpers/product-sizes.js";
/*import check from './assets/check.png';
import not from './assets/minus.png';*/
/*import out_of_stock from "./assets/out_of_stock.png";*/
/*import {topSellerFirst, cheapestFirst, sportsFirst} from "./helpers/button-messages.js";*/
import showOutcomeInConsole from './constants/array-methods-practice.js';
import Product from "./components/Product.jsx";
import {sortSales, sortPrice, sortRefreshRate, sortBigTV} from "./helpers/product-sorters.js";



function App() {
    showOutcomeInConsole();
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

                    <div className="top-seller product-container">
                        <div className="top-seller-image-container">
                            <img className="product-image" src="https://image.coolblue.nl/max/500x500/products/1786196"
                                 alt="tv"/>
                        </div>
                        <article>
                            <div>{productTitle(bestSellingTv)}</div>
                            <div>{productPrice(bestSellingTv)}</div>
                            <div>{productSizes(bestSellingTv)}</div>
                        </article>
                    </div>
                </section>
                <section className="sort-button-container">
                    <button className="sort-button" type="button" onClick={sortSales}>Meest verkocht eerst</button>
                    <button className="sort-button" type="button" onClick={sortPrice}>Goedkoopste eerst</button>
                    <button className="sort-button" type="button" onClick={sortRefreshRate}>Meest geschikt voor sport
                        eerst
                    </button>
                    <button className="sort-button" type="button" onClick={sortRefreshRate}>Meest geschikt voor sport
                        eerst
                    </button>
                    <button className="sort-button" type="button" onClick={sortBigTV}>Grootste scherm eerst
                    </button>
                </section>
                <section>
                    {Product(inventory)}
                </section>
            </main>
        </div>
    )

}

export default App
