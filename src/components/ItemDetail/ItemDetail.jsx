import'../../asyncMock'
import Counter from '../Counter/Counter'
import './itemDetail.css'



const ItemDetail = ({ img, name, category, price, description }) => {
    return (
        
       <div className='containerDetail'>
            <img src={img} alt={name}/>
            <h1 className="name">{name}</h1>
            <h3 className="category">{category}</h3>
            <p className="price"> ${price}</p>
            <p className= "description ">{description}</p> 
            <button>Añadir al carrito</button>
        </div> 

    )
}

export default ItemDetail