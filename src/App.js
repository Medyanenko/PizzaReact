import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
