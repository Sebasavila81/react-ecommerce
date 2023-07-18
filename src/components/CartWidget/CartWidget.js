import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "@creativebulma/bulma-badge/dist/bulma-badge.css"
import styles from './CartWidget.module.css';

const CartWidget = ()=> {
    return ( 
        <div className={styles.badgeCont}>

        <FontAwesomeIcon icon={faCartShopping} size="lg"/>
        <span title="Badge top right" className="badge">3</span>
        </div>
    )
}
export default CartWidget