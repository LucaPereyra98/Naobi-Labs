import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../Context/CartContext"

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, clear, cartSum} = useContext(CartContext);

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:{cart}, date:date, total:cartSum()};

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            clear()
        });
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center"> Finalizar compra </h1>
                <div className="col-md-3">
                    <form>
                        <div class="mb-3">
                            <label htmlFor="nombre" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="email" class="form-label">Email</label>
                            <input type="text" class="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="telefono" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" class="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-9">
                    <div style={{minHeight:'69.5vh'}} className="container my-5">
                        <table className="table">
                            {
                                cart.map(item => (
                                    <tr key={item.index}>
                                        <td className="text-start" width="20%">
                                            <img src={item.imagen} alt={item.nombre} width={100} className="text-start"></img>
                                        </td>
                                        <td className="text-start align-middle" width="40%">{item.nombre}</td>
                                        <td className="text-start align-middle" width="20%">{item.cantidad} x $ {item.precio}</td>
                                        <td className="text-start align-middle" width="20%">$ {item.cantidad * item.precio}</td>
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
            {orderId ? <Navigate to={"/felicitaciones/" + orderId} /> : ""}
        </div>
    )
}

export default Checkout 