import React from 'react'
import { useState } from 'react'




const ItemCount = ({stock,Onadd}) => {

const [count, setcount] = useState(0)

const increment=()=>{
    if (stock!=0 && count<ItemCount.stock ) {
        setcount(count+1)
    }
    else{
        alert('No hay mas stock')
    }
    
}
const decrement=()=>{
    if (count<=stock && count>0){
    setcount(count-1)
    }
    else{
        alert('No queda mas nada en el carro')
    }
}


  return (
    <div>
        <h5>Juego Ps5</h5>
        <h2>{stock}</h2>
        <h2>{count}</h2>
        <button onClick={increment}>Sumar al carrito</button>
        <button onClick={decrement}>Sacar del carrito</button>
        <button onClick={Onadd}>Añadir al carrito</button>

    </div>
  )
}

export default ItemCount