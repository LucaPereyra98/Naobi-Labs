import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {

    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock)

    const incrementarStock = () => {
        if ( items < itemStock ) {
            setItems( items + 1)
        }
    }

    const disminuirStock = () => {
        if (items > 1 ) {
            setItems(items - 1)
        }
    }

    const onAdd = () => {
        if (itemStock >= items) {
            setItemStock(itemStock - items)
            setItems(1)
            console.log("Agregaste: " + items + " productos al Carrito!!")
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-success" onClick={disminuirStock}> - </button>
                        <button className="btn btn-success"> {items} </button>
                        <button className="btn btn-success" onClick={incrementarStock}> + </button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button className="btn btn-success" onClick={onAdd}>Agregar a carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;