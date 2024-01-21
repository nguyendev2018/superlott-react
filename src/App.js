import React from 'react'
import { Route, Routers, Routes } from 'react-router-dom'
import path from './utils/path'
import { Public } from './pages'
import './App.css'
import Home from './pages/Home'
const App = () => {
  
  return (
    <Routes>
      <Route path={path.PUBLIC} element={<Public/>}></Route>
      <Route path={path.HOME} element={<Home/>}></Route>
    </Routes>
  )
}

export default App