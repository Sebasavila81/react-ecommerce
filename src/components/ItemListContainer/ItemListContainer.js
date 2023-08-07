import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import { useParams, Link } from "react-router-dom"
const ItemListContainer = ({ greeting }) => {
    const params = useParams()
    
    return (
        
        <div className="content">
            <div className="columns">
                <div className="column">
                    
                </div>
                <div className="column">
                    <div className="card has-background-light">
                        
                    
                        <div className="card-content">
                            <div className="media">
                               
                                <div className="media-content">
                                    <p className="title is-4">{greeting}</p>
                                    
                                </div>
                            </div>

                            <div className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                <a href="#">#css</a> <a href="#">#responsive</a>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    
                </div>

            </div>
            <ItemCount/>
            {params.idCategoria ? (<ItemList categoria={params.idCategoria}/>) : (<ItemList />)}
        </div>


    )
}
export default ItemListContainer