import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Checkout from './pages/checkout';
import Home from './pages/home';
import ProductList from './pages/product-list';
import Products from './pages/products';
// import StripeCheckoutForm from './components/stripe-payment';
// import Layout from './components/stripe-payment/Layout';
import Success from './pages/success';
import Register from './pages/register';
import Subscription from './pages/subscription';
import StripeCheckoutForm from './components/stripe-payment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:client" element={<Products />} />
        <Route path="/products" element={<ProductList />} />
        {/* <Route path="/stripe" element={<Layout />} /> */}
        <Route path="/success" element={<Success />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/register" element={<Register />} />
        <Route path="/suscribe" element={<StripeCheckoutForm />} />
        <Route path="checkout/:client/:product_id" element={<Checkout />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
