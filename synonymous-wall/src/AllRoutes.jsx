import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Customers from './Pages/Customers'
import Home from './Pages/Home'
import Partner from './Pages/Partner'
import Pricing from './Pages/Pricing'


export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/pricing' element={<Pricing />}></Route>
            <Route path='/customers' element={<Customers/>}></Route>
            <Route path='/partner' element={<Partner />}></Route>
        </Routes>
    )
}
