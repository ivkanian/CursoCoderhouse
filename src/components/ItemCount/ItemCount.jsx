import React from 'react'
import { useState } from 'react'




const ItemCount = ({stock,Onadd}) => {

const [count, setcount] = useState(0)

const increment=()=>{
    if (count<stock) {
        setcount(count+1)
    }
    else{
        alert('No hay mas stock')
    //console.log(stock)
    //console.log(count)
        
    }

    
}
const decrement=()=>{
    if (count<=stock && count !=0){
    setcount(count-1)
    }
    else{
        alert('No queda mas nada en el carro')
        // console.log(stock)
        //console.log(count)
    }
}


  return (
    <div>
        <h5>Juego Ps5</h5>
        <h2>Cantidad de stock {stock}</h2>
        <h2>{count}</h2>
        <button onClick={increment}>Sumar al carrito</button>
        <button onClick={decrement}>Sacar del carrito</button>
        <button onClick={Onadd}>Añadir al carrito</button>

    </div>
  )
}

export default ItemCount