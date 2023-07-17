import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (


        <div>
            {/* <section className="hero is-danger">
                <div className="hero-body">
                    <p className="title">
                        SUPLEMENTOS DEPORTIVOS
                    </p>
                    <p className="subtitle">
                        Danger subtitle
                    </p>
                </div>
            </section> */}
            < nav className="navbar" role="navigation" ariaLabel="main navigation" >
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> */}
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Inicio
                        </a>

                        <a className="navbar-item">
                            Suplementos
                        </a>
                        <a className="navbar-item">
                            Accesorios
                        </a>





                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item"><CartWidget /></div>
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div>
    )
}
export default NavBar        