import NavBar from "./components/NavBar/Navbar";
import "bulma/css/bulma.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {Router, BrowserRouter, Route, Routes} from "react-router-dom"

function App () {
    return (
        <div>

            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Hola"/>}/>
                    <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting="Hola"/>}/>

                </Routes>
            </BrowserRouter>
            
            

        </div>
    )

}
export default App
