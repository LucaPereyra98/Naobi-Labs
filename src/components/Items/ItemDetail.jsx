import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <div>
                        <h1 className="mb-4">{item.nombre}</h1>
                        <h5 className="mb-4">{item.categoria}</h5>
                        <p className="mb-4">{item.descripcion}</p>
                        <h2 className="text-success mb-4"> Precio: {item.precio}</h2>
                        <ItemCount stock={item.stock}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail