import { Link, NavLink } from "react-router-dom"
import logoWhite from "../images/logo/logo-white.svg"

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <Link to={"/"}className="text-decoration-none">
                            <img src={logoWhite} alt="logo" className="img-logo mb-2" />
                            <h5 className="text-uppercase mb-2 font-weight-bold text-warning">Naobi Labs Shops</h5>
                        </Link>
                        <p className="text-white">Desde el laboratorio del gaming hasta tu casa</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-3 font-weight-bold text-warning">Accesos rapidos</h5>
                        <p>
                            <NavLink to={"/"} className="text-white text-decoration-none"> Home </NavLink>
                        </p>
                        <p>
                            <NavLink to={"/"} className="text-white text-decoration-none"> Productos </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer