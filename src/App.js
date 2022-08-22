import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AboutMe from './pages/AboutMe';
import Career from './pages/Career';
import Experiences from './pages/Experiences';
import Competences from './pages/Competences';
import Portfolio from './pages/Portfolio';
import  'bootstrap/dist/css/bootstrap.min.css' ;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about-me' element={<AboutMe></AboutMe>}></Route>
        <Route path='/career' element={<Career></Career>}></Route>
        <Route path='/experiences' element={<Experiences></Experiences>}></Route>
        <Route path='/competences' element={<Competences></Competences>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;