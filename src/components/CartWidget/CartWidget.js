import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "@creativebulma/bulma-badge/dist/bulma-badge.css"
import "./CartWidget.module.css"

const CartWidget = ()=> {
    return ( 
        <div className="bagdeCont">

        <FontAwesomeIcon icon={faCartShopping} size="lg"/>
        <span title="Badge top right" className="badge">3</span>
        </div>
    )
}
export default CartWidget