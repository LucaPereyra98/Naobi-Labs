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
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href={"/shaders"}>Shaders</a></li>
                                <li><a class="dropdown-item" href={"/ornamentosArmaduras"}>Ornamentos de armaduras</a></li>
                                <li><a class="dropdown-item" href={"/ornamentosArmas"}>Ornamentos de armas</a></li>
                                <li><a class="dropdown-item" href={"/gestos"}>Gestos</a></li>
                                <li><a class="dropdown-item" href={"/remates"}>Remates</a></li>
                            </ul>
                        </div>
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