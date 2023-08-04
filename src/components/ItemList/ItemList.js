import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { getProductosAll, getProductosByID } from "../asyncMock";

const ItemList = () => {
    useEffect(() => {
        
        getProductosAll()
        .then(res => setCatalogo(res))
        .catch(err => console.log(err))
            
    }, [])

    const [catalogo, setCatalogo] = useState([])

    console.log(catalogo) 
    
   

    return (
        <div>
            <div className="container">
            <div className="columns">
            { catalogo.map((el) => <Item key={el.id} {...el} />)}
            </div></div>
        </div> )













}

export default ItemList