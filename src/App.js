import React from "react";
import Header from "./components/Header";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./components/Home";
import Details from "./components/Details";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Details" element={<Details />}>
            
          </Route>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
