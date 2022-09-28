import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Home from "./pages/Home";
import "./scss/app.scss";

const Cart = React.lazy(() => import(/*webpackChunkName: "Cart"*/"./pages/Cart"));
const FullPizza = React.lazy(() => import(/*webpackChunkName: "FullPizza"*/"./pages/FullPizza"));
const NotFoundPage = React.lazy(() => import(/*webpackChunkName: "NotFoundPage"*/"./pages/NotFoundPage"));

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Suspense fallback={<div>Завантаження кошику...</div>}><Cart /></Suspense>} />
          <Route path="/pizza/:id" element={<Suspense fallback={<div>Завантаження найсмачнішої піци...</div>}><FullPizza /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<div>Завантаженн...</div>}><NotFoundPage /></Suspense>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
