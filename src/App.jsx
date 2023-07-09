import { useState } from 'react'
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";
import { Home } from './components/Home';
import Logo from "./assets/images/nody--1634020148.jpg";
import Header from "./components/Header";
import { Footer } from './components/Footer';
import  Menu  from './components/Menu';
import { AboutProduct } from './components/AboutProduct';
import { About } from './components/About';
import { Contact } from './components/contact';

function App() {
 

  return (
    <BrowserRouter>
    
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Menu" element={ <Menu/> } />
        <Route path="/About" element={ <About/> } />
        <Route path="/About/:id" element={ <AboutProduct/> } />
        <Route path="/Contact" element={ <Contact/> } />
      </Routes>
      <Footer/>
      </BrowserRouter>
  )
}

export default App
