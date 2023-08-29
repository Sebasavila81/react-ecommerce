import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartItem = ({ id, price, tittle, quantity, pictureUrl }) => {
    const { removeItem, total } = useContext(CartContext)

    return (
        <><header>
            <h2>
                {tittle}
            </h2>
        </header><picture>
                <img scr={pictureUrl} alt={tittle} />
            </picture><section>
                <h3>
                    Precio: ${price}

                </h3>
            </section><section>
                <h4>
                    Cantidad: {quantity}
                </h4>
            </section></>

    )
}

export default CartItem