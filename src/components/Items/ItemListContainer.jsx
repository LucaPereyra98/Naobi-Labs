import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
        const filter = id ? query(itemsCollection, where("categoriaId", "==", id)) : itemsCollection
        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()} )))
        })
    })

    return (
        <div style={{minHeight:'69.5vh'}} className="container my-5">
                <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer