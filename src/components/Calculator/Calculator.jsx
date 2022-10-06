import React from 'react'
import { useState } from 'react'


const Calculator = () => {

const [result, setresult] = useState(0)
const [valor1, setvalor1] = useState(0)
const [valor2, setvalor2] = useState(0)

const restar=()=>{
setresult(parseInt(valor1)-parseInt(valor2))
}
const sumar =()=>{
setresult(parseInt(valor1)+parseInt(valor2))
}

  return (
   <div>
        <h1>{result}</h1>
        <input value={valor1} onChange={(e)=> setvalor1(e.target.value)} />
        <input value={valor2}  onChange={(e)=> setvalor2(e.target.value)}/>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restart</button>
   </div>
  )
}

export default Calculator