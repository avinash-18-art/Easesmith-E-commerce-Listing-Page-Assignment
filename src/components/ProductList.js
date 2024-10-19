import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import './ProductList.css'; 


const mockData = [
  
  { image: 'https://m.media-amazon.com/images/I/81mQhxsGAxL.jpg', name: 'Monsterra', price: 232 },
  { image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRm5y73qy5VNskkVngnNdc19BXgduoLRDSIQnuJMWYtkwUi0WBsatQX5mAYC072VEDH5voIrl9B6M3icq9TCRSdvxNN52m9_CI54-s96Ck', name: 'Monsterra', price: 69 },
  { image: 'https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-popular-outdoor-plants-for-gardening-on-terrace-16969219211404.jpg?v=1634226628', name: 'Monsterra', price: 500 }
  { image: 'https://images.meesho.com/images/products/374479188/dalx4_1200.jpg', name: 'Monsterra', price: 1000}
  { image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDrG3gGU8bAyZ7G9XspT2jHo0qVubKdzKF2w2sX-rwuW1AQ8KljW4D3Ynysq7CL60pLfzH7S2L4Y9wDABpwF8RYNe9EM_7LrnVeGqcEHpB', name: 'Monsterra', price: 1100 }
  { image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnR6XGlXWcrRX5GwCSW6K-VefFOB0WJ2swj6GBinz-VQG3Te7bFt3M7euL0ExD4OMC0Aj_UP9EkXngsipVtUgH-njTILFZHmuIgm1cVX21', name: 'Monsterra', price: 600 }
  { image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRJ64lJe6FG4p4q6OccLS9pZrj4F7iBjFKiNJQTY2xc8zUfQxwTM6hYdGFmV6EZidYI0Ukbi4VLET4he3Yqj62732y6EqNwIrGjnts5Z2E', name: 'Monsterra', price: 250 }
  { image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvZZWBW4Nqz7KTsBeoa3T7xT_fea6BOCzKCtYQYN2lWAyP22zgOiPtrG5LhpIIoPVdl3BBtjQX3RGl8-7ZItdDGmQEJAdNXBoHpZZi947i', name: 'Monsterra', price: 49 }

  
];

const ProductList = () => {
  const [products, setProducts] = useState(mockData);

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      <Pagination />
    </div>
  );
};

export default ProductList;
