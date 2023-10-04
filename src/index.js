import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import "../src/components/NavBar/assets/navbar.css"
import "../src/components/CartWidget/assets/cartwidget.css"

import App from "./App";

const rt = document.getElementById("root");
const root = ReactDOM.createRoot(rt);

root.render(<App/>)