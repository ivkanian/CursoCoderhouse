import'../../asyncMock'
import Counter from '../Counter/Counter'
import './itemDetail.css'
import { Link } from 'react-router-dom'



const ItemDetail = ({ img, name, category, price, description }) => {
    return (
        
       <div className='containerDetail'>
            <img src={img} alt={name}/>
            <h1 className="name">{name}</h1>
            <p className="price"> ${price}</p>
            <p className= "description ">{description}</p> 
            <Counter/>
            <div>
            <button>Añadir al carrito</button>
            </div>
            <Link to=  {`/category/${category}`}>
         <h4>{category}</h4>
         </Link>
        </div> 

    )
}

export default ItemDetail