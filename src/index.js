import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./asset/styles/styles.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </AuthContext>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);
