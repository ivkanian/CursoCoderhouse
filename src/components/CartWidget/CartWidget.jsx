import cart from './assets/cart.png'
import './CartWidget.css'

const CartWidget =()=>{
return(
    <div >
        <div className='container'>
            <img src={cart} alt="cart" />
            <div className='counter'><p>1</p>
        </div>
        
        </div>
    </div>

    
)
}

export default CartWidget