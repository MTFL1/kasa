import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Error  from '../pages/Error'
import Housing from '../pages/Housing'


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<Housing />}/>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router
