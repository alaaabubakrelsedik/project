import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Layout = ()=>{
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>


    <Routes>
     <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="/products/:id?" element={<Products />} />
      <Route path="/product/:id?" element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
