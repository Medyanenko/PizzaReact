import ReactDOM from "react-dom/client";
import {HashRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import React from "react";

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <HashRouter>
      <Provider store={store}>
        <React.StrictMode>
        <App />
        </React.StrictMode>
      </Provider>
    </HashRouter>
  );
}
