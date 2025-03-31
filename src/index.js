import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import App from "./App";
import './fetch.js';
import About from "./components/About.js";

// styles
import './style/style.css';
import './style/header.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />}/>
    </Routes>
  </BrowserRouter>
);