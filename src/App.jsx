import './App.css';

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
                            <article className="info-tile green-tile"></article>
                            <article className="info-tile blue-tile"></article>
                            <article className="info-tile red-tile"></article>
                        </div>
                    </section>
                    <div>
                        <h2>Best verkochte tv</h2>
                    </div>
                    <section>

                        <div className="top-seller">
                            <picture></picture>
                            <article></article>
                        </div>
                    </section>
                </main>
            </div>
    )
}

export default App
