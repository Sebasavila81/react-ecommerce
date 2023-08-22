import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ()=> {
    const [prop, setProp] = useState([]);
    
    
    
    
    
    
    
    
    
    
    
    
    useEffect(() => {
        /* const DataItem = [{
            id: 1,
            title: "Proteina",
            description: "Las proteínas son nutrientes y como tales alimentan! Una buena proteína proporciona mejor recuperación. A mayor recuperación, más es el rendimiento. Recuerda que todo cuerpo que se recupera incrementa su masa muscular. En esta sección encontrarás proteínas de huevo (Egg Protein) y de suero lácteo (Whey Protein). Además podrás comprar proteínas mixtas, la mezcla perfecta entre proteínas de huevo, leche y calcio.",
            price: 7000,
            pictureUrl: 'assets/images/imgProteina.jpg'
        },
        {
            id: 2,
            title: "Creatina",
            description: "Las creatinas son ideales para prevenir la fatiga. A menos fatiga muscular más será tu rendimiento en el entrenamiento. También son excelentes suplementos naturales que ayudan a maximizar la recuperación del músculo luego del entrenamiento",
            price: 5000,
            pictureUrl: 'assets/images/imgCreatina.png'
        },
        {
            id: 3,
            title: "Quemadores",
            description: "Son ideales para energizarte y bajar de peso rápidamente",
            price: 3000,
            pictureUrl: 'assets/images/imgQuemador.png'
        }

        ]; */

       /*  let Productos = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(DataItem[0]);
            }, 2000)
        })
            .then((res) => setProp(res))
            .catch((err) => console.log(err))
    */}, []) 


    return (
        <div>
            {prop.title ? <ItemDetail price={prop.price} description={prop.description} image={prop.pictureUrl}/> : "Vacío"}

        </div>









    )
}

export default ItemDetailContainer