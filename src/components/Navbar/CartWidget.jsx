import carritoImagen from "../images/carrito/carrito.svg"


const CartWidget = () => {
    return (
        <button type="button" class="btn btn-secondary">
            <img src={carritoImagen} alt="Carrito de compras" width={20}/>
            <span className="badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget