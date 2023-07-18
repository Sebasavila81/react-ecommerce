import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

let stock = 10;



const ItemCount = () => {

    function handleClickOnAdd() {
        if (contador != 0) {
            if (stock >= contador) {
                stock = stock - contador
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
                <button onClick={handleClickOnAdd} className="button is-danger">
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