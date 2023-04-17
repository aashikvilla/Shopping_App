import React, { useEffect, useState, useContext } from 'react'
import {CartContext} from '../App'

function Cart() {

    const {addedItems}=useContext(CartContext);
    const[total, setTotal] = useState(0);

    useEffect(()=>{
        let t=0;
        for(let i=0; i<addedItems.length;i++){        
            t+= (addedItems[i].price * addedItems[i].quantity)
        }
        setTotal(t);

    },[])
  return (
    <>
     <h1>Cart</h1>
     {addedItems.length >0 ?
     <>
        {
            addedItems.map((item,ind)=>(
                <div key ={ind} >

                    <p>{item.title} - {item.quantity} x {item.price} = { parseFloat(item.quantity) * parseFloat( item.price)}</p>
                  
                </div>
            ))
        }

        <h2>TOTAL : {total}</h2>
     
     </>
     :
     <h2>Cart is Empty</h2>
    
    }
    </>
   
  )
}

export default Cart