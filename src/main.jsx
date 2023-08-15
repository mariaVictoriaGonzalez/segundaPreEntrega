import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './routes/ItemDetailContainer.jsx'
import { NavBar } from './components/navbar.jsx'
import { Category } from './routes/Category.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route exact path="/category/:id" element={
        <>
        <NavBar/>
        <Category/>
        </>
      } />
      <Route exact path="/item/:id" element={
      <>
      <NavBar/>
      <ItemDetailContainer />
      </>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
