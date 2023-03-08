import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Detail from '../pages/Detail'
import Home from '../pages/Home'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='detail' element={<Detail/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router