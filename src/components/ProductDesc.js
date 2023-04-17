import React, { useEffect, useState , useContext} from 'react'
import {useParams} from 'react-router-dom'
import {CartContext} from '../App'

function ProductDesc({ addedProducts}) {
    const {id}=useParams();
    const [data, setData]=useState({})
    const {addedItems, setAddedItems} = useContext(CartContext);

    const [count,setCount]= useState( addedItems.find(a=>a.id == id)?.quantity ??0 );
    
    useEffect(()=>{
        console.log(id);
        console.log("added", addedItems)

        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(res=>res.json())
        .then(d=>{
             console.log(d);
              setData(d);
            });


    },[])

    const handleAdd =()=>{
        let addedProducts=addedItems;
        console.log(addedItems);
        let itm= addedProducts.find(a=>a.title == data.title);
        
        if(itm != null || itm!= undefined){
            itm.quantity++;
            setCount(itm.quantity);
        }
        else{
            let obj={
                id:data.id,
                title:data.title,
                price:data.price,
                quantity: 1
            }
            console.log(obj);
            addedProducts.push(obj);
            setCount(()=>obj.quantity);
        }
        setAddedItems(addedProducts);
      
    }
    const handleDelete=()=>{
        let addedProducts=addedItems;
        console.log(addedItems);
        let itm= addedProducts.find(a=>a.title == data.title);
        
        if(itm != null || itm!= undefined){
            itm.quantity--;
        //    let obj = {...itm, quantity : itm.quantity-1}
        //    addedProducts =addedProducts.filter(a=>a.title != data.title)
        //    addedProducts.push(obj);
           setCount(()=>itm.quantity);
        }
       
        setAddedItems(addedProducts);
    
    }

  return (
   
    <div>
        {}
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
        <div style={{display :'flex'}}>
        {
           data?.images !=undefined && data.images.length>0 &&
            data?.images.map((img, ind)=>(
                
                <div key={ind} >
                <img src={img} width="100"/>
                </div>
            ))
        }
        </div>
        <h2>Price : {data?.price}</h2>
        <button onClick={()=>handleAdd()}>Add</button>
        {count}
        <button disabled={count==0} onClick={()=>handleDelete()}>Remove</button>


    </div>
  )
}

export default ProductDesc