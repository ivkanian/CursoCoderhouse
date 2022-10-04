import './Navvar.css'
import CartWidget from '../CartWidget/CartWidget'
import Button from '../Button/Button'
import logo from './assets/logo.png'

const Navbar=()=>{
return(
    <nav className='nav'>
        
        <div>
        <ul className="horizontal">
            <li className="logo"> <img src={logo} alt="logo" /></li>
        <li>
            <a href="#">Productos</a>
        </li>
        <li>
            <a href="#">Productos</a>
        </li>
        <li>
            <a href="#">Productos</a>
        </li>
        <li>
            <a href="#">Productos</a>
        </li>
        <li className="derecha" >
            <a href="">
            <CartWidget/>
            </a>
        </li>
    </ul>
        </div>
    </nav>

)

}

export default Navbar