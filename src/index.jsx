import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import "./assets/styles/index.scss"


ReactDOM.render(
    <BrowserRouter>
    <Router />
    </BrowserRouter>,
  document.getElementById('root')
)


