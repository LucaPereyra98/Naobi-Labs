import logoDark from  "../images/logo/logo-dark.svg"

const Error404 = () => {
    return (
        <div className="container" style={{minHeight:'69.5vh'}}>
            <div className="row my-5">
                <div className="col text-center">
                    <p><img src={logoDark} alt="ecommerce logo" /></p>
                    <h1>Error 404!!</h1>
                    <h3>La pagina que estas buscando no existe</h3>
                </div>
            </div>
        </div>
    )
}

export default Error404