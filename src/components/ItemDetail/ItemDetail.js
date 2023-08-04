import { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({ title, description, price, pictureUrl, stock, estadoModal, closeModal }) => {

  const handlerCerrarModal = () => {
    closeModal()
  }

  let res = false
  if (estadoModal) {
    res = <div>
      <div className="modal is-active">
        <div className="modal-background"></div>
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
            <ItemCount initial={1} stock={stock}/>
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