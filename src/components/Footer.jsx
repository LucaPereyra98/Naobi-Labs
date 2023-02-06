import logoWhite from "./images/logo-white.svg"

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <a href={"/"} className="text-decoration-none">
                            <img src={logoWhite} alt="logo" className="img-logo mb-2" />
                            <h5 className="text-uppercase mb-2 font-weight-bold text-warning">Naobi Labs Shops</h5>
                        </a>
                        <p className="text-white">Para que tu estilo llegue hasta donde la luz alcance a tocar</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-3 font-weight-bold text-warning">Accesos rapidos</h5>
                        <p>
                            <a href={"/"} className="text-white text-decoration-none">Home</a>
                        </p>
                        <p>
                            <a href={"/productos"} className="text-white text-decoration-none">Productos</a>
                        </p>
                        <p>
                            <a href={"/sobreNosotros"} className="text-white text-decoration-none">Sobre nosotros</a>
                        </p>
                        <p>
                            <a href={"/contacto"} className="text-white text-decoration-none">Contacto</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer