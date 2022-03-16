import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Serv from './Serv';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import News from './News';
import Home from './Home';

function App() {
  return (
          <>     
    
    
      
      <HashRouter>
      
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/serv" element={<Serv/>}/>
        </Routes>
        </HashRouter>
       
      </>
      );
}

      export default App;
