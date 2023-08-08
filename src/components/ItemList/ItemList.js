import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { getProductosAll, getProductosByID } from "../asyncMock";
import { useParams } from "react-router-dom"


const ItemList = ({categoria}) => {
    const params = useParams()
    useEffect(() => {
        
        getProductosAll()
        .then(res => setCatalogo(categoria ? (res.filter((el) => el.categoria == categoria)) : res))
        .catch(err => console.log(err))
            
    }, [params])

    const [catalogo, setCatalogo] = useState([])

    return (
        <div>
            <div className="container">
            <div className="columns">
             {catalogo.map((el) => <Item key={el.id} {...el}/> )}
            </div></div>
        </div> )













}

export default ItemList