import NavBar from "./components/NavBar/Navbar";
import "bulma/css/bulma.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App () {
    return (
        <div>

            <NavBar/>
            <ItemListContainer greeting="Hola"/>

            
            

        </div>
    )

}
export default App
