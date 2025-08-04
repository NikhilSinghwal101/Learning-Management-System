import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store.js";
import ScrollToTopButton from "./components/ScrollToTop.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

// const Custom = ({ children }) => {
//   const { isLoading } = useSelector((state) => state?.auth);
//   console.log("isLoading: ", isLoading);
//   // const isLoading = false;
//   return <>{isLoading ? <LoadingSpinner /> : <>{children}</>}</>;
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Custom> */}
      <App />
      <ScrollToTopButton />
      <ToastContainer
        position="top-right"
        // toastStyle={{ marginTop: "60px" }}
        autoClose={3000}
        hideProgressBar={false} // show progress bar
        closeOnClick
        pauseOnHover
        draggable
        theme="light" // dark, colored
      />
      {/* </Custom> */}
    </BrowserRouter>
  </Provider>
);
