import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ThankYouPage from './components/ThankYouPage';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AddToCartModal from './components/AddToCartModal';
import Pagination from './components/Pagination';
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/thank-you/:productName" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
