import React, {useEffect,useMemo,useState } from 'react';
import './styles/App.css';
import {BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Posts from './Posts';
import Navbar from './Navbar/Navbar';
import Error from './pages/Error';
import AppRouter from './components/AppRouter';

function App(){
  return(
    <BrowserRouter>
    <Navbar/>
    <AppRouter />
    </BrowserRouter>
  )
}
export default App;
