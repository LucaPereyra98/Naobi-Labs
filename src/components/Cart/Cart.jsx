import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import basuraTacho from "../images/icons/basura.svg"

const Cart = () => {
    const {cart, cartTotal, cartSum, removeItem, clear} = useContext(CartContext)

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div style={{minHeight:'69.5vh'}} className="alert alert-danger text-center container my-5" role="alert">
                            No hay productos en el carrito
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div style={{minHeight:'69.5vh'}} className="container my-5">
                        <h1 className="text-center"> Carrito de compras </h1>
                        <table className="table">
                            <tr>
                                <td className="text-end" colSpan={5}>
                                    <Link className="btn btn-danger bg-danger" onClick={() => {clear()}} > Vaciar carrito </Link>
                                </td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.index}>
                                        <td className="text-start" width="10%">
                                            <img src={item.imagen} alt={item.nombre} width={100} className="text-start"></img>
                                        </td>
                                        <td className="text-start align-middle" width="40%">{item.nombre}</td>
                                        <td className="text-start align-middle" width="20%">{item.cantidad} x $ {item.precio}</td>
                                        <td className="text-start align-middle" width="20%">$ {item.cantidad * item.precio}</td>
                                        <td className="text-end align-middle" width="10%">
                                            <Link onClick={() => {removeItem(item.index)}} title={"Eliminar producto"}>
                                                <img src={basuraTacho} alt={"eliminar items"} width={40} />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}> &nbsp; </td>
                                <td className="text-end"> Total a Pagar </td>
                                <td className="text-center">
                                    <b>
                                        $ {cartSum()}
                                    </b>
                                </td>
                                <td> &nbsp; </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart 