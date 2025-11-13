import './App.css';
import {inventory} from './constants/inventory.js';
import productsSold from './helpers/products-sold.js';
import productsPurchased from './helpers/products-purchased.js';
import productsStock from "./helpers/products-stock.js";



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
                                <h2>{productsStock()}</h2>
                            </div>
                        </article>
                    </div>
                </section>
                <div>
                    <h2>Best verkochte tv</h2>
                </div>
                <section>

                    <div className="top-seller">
                        <div className="top-seller-image"></div>
                        <article>
                            <div className="product-title-description">
                                <div id="product-title">RetardBox2000</div>
                                <div id="product-description">TeeVee</div>
                            </div>
                                <div id="product-price">€1000,-</div>
                                <div id="product-available-sizes">43 inch | 50 inch | 55 inch | 58 inch</div>
                                <div id="product-specs">
                                    <ul>
                                        <li>wifi</li>
                                        <li>speech</li>
                                        <li>hdr</li>
                                        <li>bluetooth</li>
                                        <li>ambilight</li>
                                    </ul>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default App
