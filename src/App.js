import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import "./scss/app.scss";

export const SearchContext = React.createContext('');
function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
      <Header/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
