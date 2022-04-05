import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

import './styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-br')

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()