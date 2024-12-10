import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Contect from './pages/Contect';
import Brands from './pages/Brands';
import Services from './pages/Services';
import About from './pages/About';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={ <Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/services" element={<Services />} />
      </Route>
    )
  )



  return (
    
      <div>
        <RouterProvider router={router} />
      </div>
   
  )
}

export default App
