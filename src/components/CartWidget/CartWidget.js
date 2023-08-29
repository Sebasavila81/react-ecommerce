import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "@creativebulma/bulma-badge/dist/bulma-badge.css"
import styles from './CartWidget.module.css';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ()=> {
    
    const { totalQuantity } = useContext(CartContext)
    
    return ( 
        <Link to='/cart' className={styles.badgeCont} style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>

        <FontAwesomeIcon icon={faCartShopping} size="lg"/>
        {/* <span title="Badge top right" className="badge">{cantidad}</span> */}
        {totalQuantity}
        </Link>
    )
}
export default CartWidget