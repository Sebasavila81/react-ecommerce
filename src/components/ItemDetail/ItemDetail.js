import { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ title, description, price, pictureUrl, stock, estadoModal, closeModal }) => {
  
  const [quantityAdded, setQuantityAdded] = useState(0)

  const handelOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, title, price
    }

    addItem(item, quantity)
    
  }
  const handlerCerrarModal = () => {
    closeModal()
  }

  let res = false
  if (estadoModal) {
    res = <div>
      <div className="modal is-active">
        <div className="modal-background" onClick={handlerCerrarModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button className="delete" aria-label="close" onClick={handlerCerrarModal}></button>
          </header>
          <section className="modal-card-body">

            <div className='modal-content'>
              <p class="image is-4by3">
                <img src={pictureUrl} />
              </p>
              <p>{description}
              </p>
              <p>$ {price}
              </p>
            </div>

          </section>
          <footer className="modal-card-foot">
            {
              quantityAdded > 0 ? (
                <link to='/cart' className=''>Terminar compra</link>

              ) : (
                <ItemCount initial={1} stock={stock} onAdd={handelOnAdd}/>
              )  
            }
            
          </footer>
        </div>
      </div>
    </div>


  }
  return (
    <div>
      {res}
    </div>

  )
}

export default ItemDetail