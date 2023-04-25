import logo from './logo.svg';
import './App.css';
import PhotoShowing from './components/PhotoShowing';
import { createContext, useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Bookmarked from './components/Bokmarked';
const imageContext=createContext()
function App() {
  
  const [bookmarked,setBookmarked]=useState([])
  
  return  <imageContext.Provider value={{bookmarked,setBookmarked}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PhotoShowing />} />
      <Route path='/bookmark' element={<Bookmarked />} />
    </Routes>
    </BrowserRouter> 
  </imageContext.Provider>
   
}

export {
  App,
  imageContext
}
