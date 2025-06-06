import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #222;
  min-height: 48px;
`;

const Category = styled.p`
  font-size: 0.875rem;
  color: #888;
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #1e88e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1565c0;
  }
`;

function ProductCard({ product }) {
  return (
    <Card>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Category>{product.category}</Category>
      <Price>R$ {product.price.toFixed(2)}</Price>
      <Button>Adicionar ao Carrinho</Button>
    </Card>
  );
}

export default ProductCard;
