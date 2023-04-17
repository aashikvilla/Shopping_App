import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router'

function ProductsList() {
   const limit=10;
    const navigate= useNavigate();
    const [product,setProducts]=useState([]);
    const [page,setPage]=useState(0);

    
    useEffect(()=>{
       
        fetch(`https://api.escuelajs.co/api/v1/products?offset=${page* limit}&limit=${limit}`)
        .then(res=>res.json())
        .then(data=>{console.log(data); setProducts( data )});

    },[page])
  return (
    <>
    <h1>ProductsList</h1>
    {
        product.map(item=>(
            <div key={item.id}>
            <h1>
            {item.title}
                </h1>
                <p>{item.description}</p>
                <button onClick={()=> navigate(`/${item.id}`)}>View</button>
            </div>

        ))
    }
    <div style={{padding :'1rem'}}>
    <button disabled={page ==0} onClick={()=>setPage(()=>page-1)}> prev</button>
    {page}
    <button  onClick={()=>setPage(()=>page+1)}>next</button>
    </div>

</>
  )
}

export default ProductsList;