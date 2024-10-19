import React from 'react';

const AddToCartModal = ({ product, setIsModalOpen }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Do you want to add {product.name} to your cart?</h3>
        <button onClick={() => setIsModalOpen(false)}>Confirm</button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
