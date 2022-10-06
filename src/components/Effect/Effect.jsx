import React from 'react'
import { useEffect,useState } from 'react'



const Effect = () => {

const [Title, setTitle] = useState('Titulo 1')    
//en app deberia haber un boton que mate el effect

//Use effect se ejecuta despues de que este el dom montado
//Se deberia usar cuando se utilizan tareas pesadas
//tambien se puede utilizar con APis tareas asincronas
useEffect(() => {
    console.log('despues del render')
    return () => {
//recordar que en el return se ejecuta la ultima funciona antes de destruirse el componente
      console.log('Antes de desmontarse')
    }
  }, [])

useEffect(() => {
    console.log('despues de cambiar el titulo')
  return () => {
    
  }
}, [Title])//Si aca pone Title, hago que escuche cuando cambie el Title
//Es el array de dependencia, osea, de que va a depender que esa funcion se ejecute


  return (
    <div>
        <h1>Effect</h1>
        <h2>{Title}</h2>
        <button onClick={()=> setTitle('Titulo Cambiado')}>Cambiar titulo</button>
        
    </div>

  )

}

export default Effect