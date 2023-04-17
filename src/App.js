import logo from './logo.svg';
import './App.css';
import ProductsList from './components/ProductsList';
import { createContext, useState } from 'react';
import {BrowserRouter,NavLink} from 'react-router-dom';
import Routing from './Routing'

export const CartContext =createContext({});
function App() {
  
  const [addedItems, setAddedItems]= useState([]);

  var context={
    "addedItems":addedItems,
    "setAddedItems":setAddedItems
  }


  return (
    <BrowserRouter>
     <CartContext.Provider value={context}>
      <div className="App">
   
        <NavLink to="/" className="nav-item" style={{padding:'1rem'}}>Home</NavLink>    
        <NavLink to="/cart" className="nav-item" style={{padding:'1rem'}}>Cart</NavLink>

        <Routing />
        
      </div>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
