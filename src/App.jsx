import React from "react";
import "./App.css"
import Background from "./components/Background";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Background />} />
    </Routes>
  </Router>
  
  );
};

export default App;
