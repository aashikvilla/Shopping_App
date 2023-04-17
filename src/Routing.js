import React from 'react'
import { Route, Routes} from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductDesc from './components/ProductDesc';
import Cart from './components/Cart';

function Routing() {
  return (
   
    <Routes>
    <Route path="/" element={<ProductsList/>}/>
    <Route path="/:id" element={<ProductDesc/>}/>         
    <Route path="/cart" element={<Cart/>}/>        
</Routes>
  )
}

export default Routing