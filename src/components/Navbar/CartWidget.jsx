import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import carritoImagen from '../images/carrito/carrito.svg'


const CartWidget = () => {
    const {cartTotal} = useContext(CartContext) 

    return (cartTotal() > 0) ? 
        <Link to={"/cart"} className="btn btn-secondary">
            <img src={carritoImagen} alt="Carrito de compras" width={20}/>
            <span className="badge rounded-pill bg-danger">
                {cartTotal()}
            </span>
        </Link> : ""
}

export default CartWidget