import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Checkout from './pages/checkout';
import Clients from './pages/clients';
import Products from './pages/products';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/:client" element={<Products />} />
          <Route path="checkout/:client/:product_id" element={<Checkout />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
