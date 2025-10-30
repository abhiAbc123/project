import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Customize from './customize';
import Customize2 from './Customize2';

function App() {
   
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/customize" element={< Customize/>} />
        <Route path="/customize2" element={< Customize2/>} />

        
      </Routes>
    </Router>
  );
}

export default App;
