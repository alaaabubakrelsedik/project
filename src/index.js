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
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

const Layout = ()=>{
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="/products/:id?" element={<Products />} />
      <Route path="/product/:id?" element={<Product />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
       </Route>
    </Routes>
    <ToastContainer />
  </BrowserRouter> 
  </PersistGate> 
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
