import React from 'react'
import { useState } from 'react'

const Counter = () => {
const [count, setCount] = useState(0)
const [title, setTitle] = useState('Primer titulo')
  // let count=0
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
  if ({count}>=1) {
  setCount({count}-1)
  }}

  const cambiarTitulo=()=>{
    setTitle('Segundo Titulo')
  }

  return (
    <div>
    <h1>{title}</h1>
    <h1>Contador</h1>
    {count !==0 ? <h2>{count}</h2>:null} {/*Solo se puede usar ternario por que no se puede usar IF por parametros*/}
    <button onClick={decrement}>Restar</button>
    <button onClick={increment} >Sumar</button>
    <button onClick={cambiarTitulo}>cambiar titulo</button>
    </div>
  )
}

export default Counter