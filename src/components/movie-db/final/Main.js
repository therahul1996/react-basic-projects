import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import Home from './Home'
import Movie from './SingleMovie'

function Main() {
  return (
    <BrowserRouter >
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies/:id' element={<Movie />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Main
