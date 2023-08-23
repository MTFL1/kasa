import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error  from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

function Router() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
    </>
  );
}

export default Router

