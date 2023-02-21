import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import arrayProductos from "../json/productos.json"



const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoriaId === id) : arrayProductos)
            }, 2000)
        })
        promesa.then((respuesta) => {
            setItems(respuesta)
        })
    }, [id])

    return (
        <div style={{minHeight:'69.5vh'}} className="container my-5">
                <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer