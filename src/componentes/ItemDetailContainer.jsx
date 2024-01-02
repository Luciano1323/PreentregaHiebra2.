// ItemDetailContainer.jsx
import React, { useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ item, onCloseDetails, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCartClick = () => {
    onAddToCart(quantity);
    onCloseDetails();
  };

  return (
    <ItemDetail
      item={{ ...item, quantity }}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      onAddToCart={handleAddToCartClick}
      onCloseDetails={onCloseDetails}
    />
  );
};

export default ItemDetailContainer;
