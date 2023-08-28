import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
