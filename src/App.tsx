import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Checkout from './pages/checkout';
import Home from './pages/home';
import ProductList from './pages/product-list';
import Products from './pages/products';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:client" element={<Products />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="checkout/:client/:product_id" element={<Checkout />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
