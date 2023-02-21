import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.index} className="text-decoration-none text-dark">
            <div className="card mb-3">
                <img src={item.imagen} className="card-img-top img-fluid" alt={item.nombre} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.nombre}</h5>
                </div>
            </div>
        </Link>
    )
}

export default Item