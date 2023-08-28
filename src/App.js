import NavBar from "./components/NavBar/Navbar";
import "bulma/css/bulma.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom"
import Error from "./components/Error/Error";
import { CardProvider } from "./components/context/CartContext";


function App() {


    return (
        <div>
            <BrowserRouter>
                <CardProvider>
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer />} />
                        <Route path="/productos" element={<ItemListContainer />} />
                        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
                        <Route path="*" element={<Error />} />

                    </Routes>
                </CardProvider>
            </BrowserRouter>


        </div>
    )

}
export default App
