import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 0 1rem;
`;

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 1.2rem;
  color: red;
`;

const traduzirCategoria = (categoria) => {
  const mapa = {
    electronics: "Eletrônicos",
    jewelery: "Joias",
    "men's clothing": "Roupas Masculinas",
    "women's clothing": "Roupas Femininas",
  };
  return mapa[categoria] || categoria;
};

const traduzirTitulo = (titulo) => {
  const mapa = {
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops":
      'Fjallraven - Mochila Foldsack Nº1, Cabe um Laptop de 15"',
    "Mens Casual Premium Slim Fit T-Shirts ":
      "Camiseta Masculina Casual Slim Fit Premium",
    "Mens Cotton Jacket": "Jaqueta Masculina de Algodão",
    "Mens Casual Slim Fit": "Camisa Masculina Slim Fit Casual",
    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet":
      "Pulseira Feminina Corrente com Dragão de Ouro e Prata - John Hardy Legends Naga",
    "Solid Gold Petite Micropave ": "Anel Micropavê de Ouro Maciço",
    "White Gold Plated Princess": "Anel Princesa Banhado a Ouro Branco",
    "Pierced Owl Rose Gold Plated Stainless Steel Double":
      "Brinco Duplo de Aço Inoxidável Banhado a Ouro Rosé - Pierced Owl",
    "WD 2TB Elements Portable External Hard Drive - USB 3.0 ":
      "HD Externo Portátil WD 2TB - USB 3.0",
    "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s":
      "SSD Interno SanDisk PLUS 1TB - SATA III 6 Gb/s",
    "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5":
      'SSD Silicon Power 256GB 3D NAND A55 Cache SLC - SATA III 2.5"',
    "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive":
      "HD Externo Portátil WD 4TB para Playstation 4",
    "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin":
      "Monitor Acer SB220Q 21.5\" Full HD (1920 x 1080) IPS Ultrafino",
    "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor":
      "Monitor Gamer Curvo Samsung CHG90 49\" 144Hz",
    "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats":
      "Jaqueta 3 em 1 de Snowboard Feminina - BIYLACLESEN",
    "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket":
      "Jaqueta Motoqueira Feminina de Couro Sintético com Capuz Removível - Lock and Love",
    "Rain Jacket Women Windbreaker Striped Climbing Raincoats":
      "Capa de Chuva Feminina Corta-vento Listrada para Escalada",
    "MBJ Women's Solid Short Sleeve Boat Neck V ": "Blusa Feminina Gola Canoa de Manga Curta - MBJ",
    "Opna Women's Short Sleeve Moisture": "Camiseta Feminina de Manga Curta com Controle de Umidade - Opna",
    "DANVOUY Womens T Shirt Casual Cotton Short": "Camiseta Casual Feminina de Algodão - DANVOUY",
  };

  return mapa[titulo] || titulo;
};

function ProductList({ onLoadingChange }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (onLoadingChange) onLoadingChange(true);

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const traduzidos = data.map((prod) => ({
          ...prod,
          title: traduzirTitulo(prod.title),
          category: traduzirCategoria(prod.category),
        }));
        setProducts(traduzidos);
        if (onLoadingChange) onLoadingChange(false);
      })
      .catch(() => {
        setError("Erro ao carregar produtos.");
        if (onLoadingChange) onLoadingChange(false);
      });
  }, [onLoadingChange]);

  if (error) return <Error>{error}</Error>;

  return (
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default ProductList;
