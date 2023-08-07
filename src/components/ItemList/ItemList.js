import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { getProductosAll, getProductosByID } from "../asyncMock";

const ItemList = ({categoria}) => {
    useEffect(() => {
        
        getProductosAll()
        .then(res => setCatalogo(res))
        .catch(err => console.log(err))
            
    }, [])

    const [catalogo, setCatalogo] = useState([])

    const catalogoFiltrado = catalogo.filter((el) => el.categoria == categoria)
    console.log(catalogoFiltrado)

    return (
        <div>
            <div className="container">
            <div className="columns">
             {categoria ? (catalogoFiltrado.map((el) => <Item key={el.id} {...el}/> )) : (catalogo.map((el) => <Item key={el.id} {...el}/> ))}
            </div></div>
        </div> )













}

export default ItemList