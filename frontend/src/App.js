import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
