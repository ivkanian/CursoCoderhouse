import React from 'react'
import { useState } from 'react'
import './Counter.css'

const Counter = () => {
const [count, setCount] = useState(0)
const [title, setTitle] = useState('Primer titulo')
  // let count=0
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
  if (count>=1) {
  setCount(count-1)
  }}

  const reset = () =>{
    setCount(0)
  }

  const cambiarTitulo=()=>{
    setTitle('Segundo Titulo')
  }

  return (
    <div className='counter'>
        {/* <h1>{title}</h1> */}
        {/* <h2>{count}</h2> */}
        <span className="counter__output">{count}</span>
        <div className="btn__container">
        {/* {count !==0 ? :null} Solo se puede usar ternario por que no se puede usar IF por parametros */}
        {/* <button onClick={decrement}>-</button> */}
        {/* <button onClick={increment} >+</button> */}
        <button className="control__btn" onClick={decrement}>-</button>
        <button className="control__btn" onClick={increment}>+</button>
        {/* <button className="reset" onClick={reset}>Reset</button> */}
        </div>
    </div>
  )
}

export default Counter