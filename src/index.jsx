import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router/Router'
import "./assets/styles/index.scss"
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.render(
    <BrowserRouter >
      <Header />
    <Router />
    <Footer />
    </BrowserRouter>,
  document.getElementById('root')
)


