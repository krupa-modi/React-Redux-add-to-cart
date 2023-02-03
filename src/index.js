import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";

// import store for use in any components
import store from "./redux/store/store";

// import provider from react-redux
import { Provider } from "react-redux";

// console.log(store.getState());

// console.warn("store data", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

