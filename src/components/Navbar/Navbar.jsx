import './Navvar.css'
import CartWidget from '../CartWidget/CartWidget'
import Button from '../Button/Button'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar=()=>{
return(
    <nav className='nav'>
        
        <div>
        <ul className="horizontal">
            <Link to= '/'>
            <li className="logo"> <img src={logo} alt="logo" /></li>
            </Link>
        <li>
            <Link to= '/category/Ps5'>
            <a href="#" style={{color: 'white'}}>PS5</a>
            </Link>
        </li>
        <li>
            <Link to= '/category/Xbox'>
            <a href="#"style={{color: 'white'}}>XBOX</a>
            </Link>
        </li>
        <li>
            <Link to= '/category/Switch'>
            <a href="#"style={{color: 'white'}}>SWITCH</a>
            </Link>
        </li>
        {/* <li>
            <Link to= '/category/CONTACTO'>
            <a href="#"style={{color: 'white'}}>Contacto</a>
            </Link>
        </li> */}
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