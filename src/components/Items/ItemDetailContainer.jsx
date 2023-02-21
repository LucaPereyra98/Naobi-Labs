import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import arrayProductos from "../json/productos.json"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(prod => prod.index === parseInt(id)))
            }, 2000)
        })
        promesa.then((respuesta) => {
            setItem(respuesta)
        })
    }, [id])



    return (
        <div style={{minHeight:'69.5vh'}} className="container my-5">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer