import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main.jsx";
import "./index.css";

/**
 * Tutorial
 * @link https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
