import Item from "../Item/Item";
import { useEffect, useState } from "react";

const ItemList = () => {
    useEffect(() => {
        const DataItem = [{
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
            pictureUrl: 'assets/images/imgCreatina.jpg'
        },
        {
            id: 3,
            title: "Quemadores",
            description: "Son ideales para energizarte y bajar de peso rápidamente",
            price: 3000,
            pictureUrl: 'assets/images/imgQuemador.jpg'
        }

        ];

        let Productos = new Promise((resolve, reject) => {
            setTimeout(() => {
                let randomVariable = Math.floor(Math.random() * 10) + 1;
                if (randomVariable > 8) {
                    reject("Error");
                }
                else {
                    resolve(DataItem);
                }
            }, 2000)
        })
            .then((res) => setCatalogo(res))
            .catch((err) => console.log(err))
    }, [])

    const [catalogo, setCatalogo] = useState([])

    console.log(catalogo) 
    
   

    return (
        <div>
            <div className="container">
            <div className="columns">
            { catalogo.map((el) => <Item key={el.id} title={el.title} price={el.price} desc={el.description} img={el.pictureUrl} />)}
            </div></div>
        </div> )













}

export default ItemList