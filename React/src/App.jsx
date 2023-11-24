import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Add from './Components/Crud_Components/Add';
import See from './Components/Crud_Components/See';
import Update from './Components/Crud_Components/Update';
import Search from './Components/Crud_Components/Search';
import Delete from './Components/Crud_Components/Delete';

import './Components/App.css';

import Header from "./Components/Require_Components/Header";
import Footer from "./Components/Require_Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/see" element={<See />} />
        <Route path="/search" element={<Search />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;




