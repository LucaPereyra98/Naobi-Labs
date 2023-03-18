import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const document = doc(db, "items", id);
        getDoc(document).then(element => {
            setItem({id:element.id, ...element.data()});
        });
    }, [id]);



    return (
        <div style={{minHeight:'69.5vh'}} className="container my-5">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer