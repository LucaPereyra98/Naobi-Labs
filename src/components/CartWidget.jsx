import carritoImagen from "./images/carrito.svg"


const CartWidget = () => {
    return (
        <button type="button" className="btn btn-primary ml-auto bg-dark-subtle bg-dark-border">
            <img src={carritoImagen} alt="carrito de compras" width={24}/>
            <span className="badge rounded-pill bg-danger">5</span>
        </button>
    )
}

export default CartWidget