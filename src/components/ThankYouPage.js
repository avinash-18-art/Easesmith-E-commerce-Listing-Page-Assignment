import React from 'react';
import { useParams } from 'react-router-dom';

const ThankYouPage = () => {
  const { productName } = useParams();
  return (
    <div className="thank-you">
      <h1>Thank you for your interest in {productName}!</h1>
    </div>
  );
};

export default ThankYouPage;
