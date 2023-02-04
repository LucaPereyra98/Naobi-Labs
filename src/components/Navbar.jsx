import CartWidget from "./CartWidget";
import logoDark from  "./images/logo-dark.svg"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href={"/"}><img src={logoDark} alt="ecommerce logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href={"/"}>Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/productos"}>Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/sobreNosotros"}>Sobre nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"/contacto"}>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <CartWidget></CartWidget>
            </div>
        </nav>
    )
}

export default Navbar;