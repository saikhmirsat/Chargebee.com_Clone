import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Customers from './Pages/Customers'
import DemoPage from './Pages/DemoPage'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Partner from './Pages/Partner'
import Pricing from './Pages/Pricing'
import Signup from './Pages/Signup'
import CustomerDetalPage from './SinglePage/CustomerDetalPage'
import SyncSpiderDetail from './SinglePage/SyncSpiderDetail'





export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/pricing' element={<Pricing />}></Route>
            <Route path='/customers' element={<Customers />}></Route>
            <Route path='/partner' element={<Partner />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/customerDetailPage' element={<CustomerDetalPage />}></Route>
            <Route path='/customers/SyncSpider' element={<SyncSpiderDetail />}></Route>
            <Route path='/demoPage' element={<DemoPage />}></Route>
        </Routes>
    )
}
