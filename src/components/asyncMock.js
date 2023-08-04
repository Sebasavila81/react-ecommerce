const productos = [{
    id: 1,
    title: "Proteina",
    description: "Las proteínas son nutrientes y como tales alimentan! Una buena proteína proporciona mejor recuperación. A mayor recuperación, más es el rendimiento. Recuerda que todo cuerpo que se recupera incrementa su masa muscular. En esta sección encontrarás proteínas de huevo (Egg Protein) y de suero lácteo (Whey Protein). Además podrás comprar proteínas mixtas, la mezcla perfecta entre proteínas de huevo, leche y calcio.",
    price: 7000,
    pictureUrl: 'assets/images/imgProteina.jpg',
    stock: 20,

},
{
    id: 2,
    title: "Creatina",
    description: "Las creatinas son ideales para prevenir la fatiga. A menos fatiga muscular más será tu rendimiento en el entrenamiento. También son excelentes suplementos naturales que ayudan a maximizar la recuperación del músculo luego del entrenamiento",
    price: 5000,
    pictureUrl: 'assets/images/imgCreatina.png',
    stock: 15, 
},
{
    id: 3,
    title: "Quemadores",
    description: "Son ideales para energizarte y bajar de peso rápidamente",
    price: 3000,
    pictureUrl: 'assets/images/imgQuemador.png',
    stock: 10
}

];

export const getProductosAll = () => { return new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomVariable = Math.floor(Math.random() * 10) + 1;
        if (randomVariable > 8) {
            reject("Error");
        }
        else {
            resolve(productos);
        }
    }, 2000)
})}

export const getProductosByID = (productID) => { return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomVariable = Math.floor(Math.random() * 10) + 1;
            if (randomVariable > 8) {
                reject("Error");
            }
            else {
                resolve(productos.find(prod => prod.id == productID));
            }
        }, 2000)
    })
}
