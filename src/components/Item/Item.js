import { Image } from "react";

const Item = ({title, price, desc, img }) => {

    return (
        <div className="column">
        <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} alt={title} />
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
          {desc}.
          </div>
        </div>
      </div>
      </div>
    )
}
export default Item