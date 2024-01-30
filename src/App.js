import React from 'react'
import { Route, Routers, Routes } from 'react-router-dom'
import path from './utils/path'
import { Public } from './pages'
import './App.css'
const App = () => {
  
  return (
    <Routes>
      <Route path={path.PUBLIC} element={<Public/>}></Route>
    </Routes>
  )
}

export default App