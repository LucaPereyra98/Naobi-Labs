import logoDark from  "../images/logo/logo-dark.svg"
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" activeclassname={"active"} to={"/"}><img src={logoDark} alt="ecommerce logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" activeclassname={"active"} to={"/"}>Inicio</Link>
                        </li>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <NavLink class="dropdown-item text-decoration-none text-dark" activeclassname={"active"} to={"/category/playstation"}>PlayStation</NavLink>
                                </li>
                                <li>
                                    <NavLink class="dropdown-item text-decoration-none text-dark" activeclassname={"active"} to={"/category/xbox"}>Xbox</NavLink>
                                </li>
                                <li>
                                    <NavLink class="dropdown-item text-decoration-none text-dark" activeclassname={"active"} to={"/category/nintendo"}>Nintendo</NavLink>
                                </li>
                                <li>
                                    <NavLink class="dropdown-item text-decoration-none text-dark" activeclassname={"active"} to={"/category/steam"}>Steam</NavLink>
                                </li>
                            </ul>
                        </div>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/sobreNosotros`}>Sobre nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/contacto`}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar;