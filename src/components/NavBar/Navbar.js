import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"
import ItemListContainer from "../ItemListContainer/ItemListContainer"


const NavBar = () => {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img src="/assets/images/logo.png" width="80" height="28" />
                    </Link>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">

                      <Link className="navbar-item" to='/'>Inicio</Link>
                      <Link className="navbar-item" to='/contacto'>Contacto</Link>
                        <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-item" to='/productos'>Productos</Link>

                            <div className="navbar-dropdown">
                            <Link className="navbar-item" to='/categoria/1'>Proteina</Link>
                            <Link className="navbar-item" to='/categoria/2'>Creatina</Link>
                            <Link className="navbar-item" to='/categoria/3'>Quemadores</Link>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <CartWidget cantidad={3}/>
                        </div>
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
            </nav>
        </div>




    )
}
export default NavBar        