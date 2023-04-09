import React from 'react'
import { Routes, Route } from "react-router-dom";
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';
import About from './Pages/About';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import SingleProduct from './Pages/SingleProduct';

function AppRoutes() {
    return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:id' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckOut />} />

        </Routes>


    )
}

export default AppRoutes

