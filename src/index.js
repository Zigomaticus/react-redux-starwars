// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// Context
import ThemeProvider from "./context/ThemeProvider";
// App
import App from "./containers/App/App";
// Store
import store from "./store/store";
// Css
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
