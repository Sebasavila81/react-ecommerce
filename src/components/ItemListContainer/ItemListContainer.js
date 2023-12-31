import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
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

                            <div className="content has-text-centered">
                               <h1>Bienvenidos a Suplementos Perci</h1>  
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    
                </div>

            </div>
          
            {params.idCategoria ? (<ItemList categoria={params.idCategoria} params={params} />) : (<ItemList />)}
        </div>


    )
}
export default ItemListContainer