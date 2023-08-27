import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
