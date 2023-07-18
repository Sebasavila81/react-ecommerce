import ItemCount from "../ItemCount/ItemCount"
const ItemListContainer = ({ greeting }) => {
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
        </div>


    )
}
export default ItemListContainer