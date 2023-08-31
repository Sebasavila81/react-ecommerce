import { useState, useContext } from "react"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from "../context/CartContext";

const ItemCount = ({idProducto, precioProducto, stockProducto}) => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)
    let encontrarCarrito = cart.filter( e => e.idProducto == idProducto)
    let stockCarrito = 0
    encontrarCarrito.length ? stockCarrito = encontrarCarrito[0].cantidad : stockCarrito = 0
    let stock = 0
    stockCarrito ? stock = stockProducto-stockCarrito : stock = stockProducto

    console.log(stockCarrito)

    function actualizarCarrito(cantidad){
        const cart2 = cart.map( e => e.idProducto == idProducto ? {...e, cantidad: e.cantidad+cantidad} : e)
        cart.length=0
        cart.push(...cart2)

    }
    function handleClickOnAdd() {
        if (contador != 0) {
            if (stock >= contador) {
                stock = stock - contador
                stockCarrito ? actualizarCarrito(contador) : cart.push({idProducto, precioProducto, cantidad: contador})
                console.log(stockCarrito)
                console.log(cart)
                toast.success('Pedido Agregado al Carrito');
            }
            else {
                toast.error('No hay stock suficiente');
            }
        } else {
            toast.error('El pedido debe ser mayor a 0.')
        }

    }

    function handleClickSuma() {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    function handleClickResta() {
        if (contador > 0) {
            setContador(contador - 1);

        }
    }
    const [contador, setContador] = useState(0);



    return (
        <div className="columns">
            <div className="column">

            </div>
            <div className="column is-flex is-justify-content-space-between">
                <button onClick={handleClickResta} className="button is-danger ">
                    <span>-</span>
                </button>
                <span>{contador}</span>
                <button onClick={handleClickSuma} className="button is-danger">
                    <span>+</span>
                </button>
                <button onClick={handleClickOnAdd} disabled={true ? stock<contador : false} className="button is-danger">
                    <span>AGREGAR AL CARRITO</span>
                </button>
            </div>
            <div className="column">


            </div>

            <ToastContainer />
        </div>

    )
}

export default ItemCount