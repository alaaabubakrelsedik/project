import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Gigs from "./pages/Gigs/Gigs";
import Gig from "./pages/Gig/Gig";
import Orders from "./pages/Orders/Orders";
import MyGigs from "./pages/MyGigs/MyGigs";
import Add from "./pages/Add/Add";
import Messages from "./pages/Messages/Messages";
import Message from "./pages/Message/Message";
import "./App.scss";
import Register from "./components/Register/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/gig/:id" element={<Gig />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/mygigs" element={<MyGigs />} />
          <Route path="/add" element={<Add />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/message/:id" element={<Message />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App; 