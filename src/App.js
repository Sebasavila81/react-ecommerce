import NavBar from "./components/NavBar/Navbar";
import "bulma/css/bulma.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {Router, BrowserRouter, Route, Routes} from "react-router-dom"
import Error from "./components/Error/Error";






function App () {

    
    return (
        <div>


            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />}/>
                    <Route path="/productos" element={<ItemListContainer />}/>
                    <Route path="/categoria/:idCategoria" element={<ItemListContainer />}/>
                    <Route path="*" element={<Error/>} />

                </Routes>
            </BrowserRouter>
            
            

        </div>
    )

}
export default App
