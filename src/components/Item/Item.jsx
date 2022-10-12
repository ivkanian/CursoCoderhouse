import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'


const Item = ({id,img,name,category,price,description}) => {
  return (
    
    <div className='item' >
         <img src={img} alt="" style={{width:100}}/>
         <h1 >{name}</h1>
         {/* <h3>{description}</h3> */}
         <h3>${price}</h3>
         <Link to=  {`/gameid/${id}`}>
         <button>Ver Detalle</button>
         </Link>
         <Link to=  {`/category/${category}`}>
         <h4>{category}</h4>
         </Link>
    </div>
   
  )
}

export default Item



