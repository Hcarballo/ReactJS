import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                </Routes>
                <footer>
                    <p>Copyright 2023 &copy;</p>
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;