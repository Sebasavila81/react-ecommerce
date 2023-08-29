import { Image, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import CartItem from "../CartItem/CartItem";


const Item = ({ stock, title, price, description, pictureUrl }) => {
  const [modal, setModal] = useState(false);

  const handlerClickDetail = () => {
    setModal(!modal)
   

  }


  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image is-justify-content-center">
          <figure className="image is-3by2">
            <img onClick={handlerClickDetail} src={pictureUrl} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">$ {price}</p>
            </div>
          </div>

          <div className="content">
            {description}.
          </div>
        </div>
      </div>
      <ItemDetail stock={stock} title={title} description={description} price={price} pictureUrl={pictureUrl} estadoModal={modal} closeModal={handlerClickDetail} />
    </div>
  )
}
export default Item