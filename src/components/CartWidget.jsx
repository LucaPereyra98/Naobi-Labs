import carritoImagen from "./images/carrito.svg"


const CartWidget = () => {
    return (
        <button type="button" className="btn btn-success ml-auto">
            <img src={carritoImagen} alt="carrito de compras" width={24}/>
            <span className="badge rounded-pill bg-danger">4</span>
        </button>
    )
}

export default CartWidget