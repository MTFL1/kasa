import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router/Router'
import "./assets/styles/index.scss"
import Header from './components/Header'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
      <BrowserRouter >
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
);


