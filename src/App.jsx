import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
function App() {
   
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
