import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import App from "./App";
import './fetch.js';
import About from "./components/About.js";
import Cart from "./components/Cart.js";

// styles
import './style/style.css';
import './style/header.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />}/>
      <Route path="cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
);