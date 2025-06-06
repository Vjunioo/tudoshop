import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [loadingSite, setLoadingSite] = useState(true); /
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingSite(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loadingSite) {
    return (
      <div className="loading-screen">
        <h2>Carregando...</h2>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <div className="logo-area">
            <img src="/eye.png" alt="Logo TudoShop" className="logo-image" />
            <span className="logo-text">TudoShop</span>
          </div>

          <div className="search-area">
            <input type="text" placeholder="Buscar produtos..." className="search-input" />
            <button className="search-button">🔍</button>
          </div>

          <div className="user-area">
            <button className="user-button">Login</button>
            <button className="cart-button">🛒 Carrinho</button>
          </div>
        </div>
      </header>

      {/* Seção promocional */}
      <section className="promo-section">
        <img
          src="/fundo-de-papel-de-parede-colorido-embacado-artistico.jpg"
          alt="Novas promoções chegando"
          className="promo-image"
        />
        <div className="promo-content">
          <h2>Novas promoções chegando!</h2>
          <button className="promo-button">Veja agora</button>
        </div>
      </section>

      <main>
        <ProductList onLoadingChange={setLoading} />
      </main>

      {!loading && (
        <>
          <div
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Voltar ao início
          </div>

          <footer className="app-footer">
            <div className="footer-content">
              <p>&copy; {new Date().getFullYear()} TudoShop. Todos os direitos reservados.</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
