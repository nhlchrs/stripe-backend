import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layout';
import Products from '@pages/products';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
