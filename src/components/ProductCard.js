import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCartModal from './AddToCartModal';

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/thank-you/${product.name}`);
  };

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleViewProduct}>View Product</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {isModalOpen && <AddToCartModal product={product} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default ProductCard;
