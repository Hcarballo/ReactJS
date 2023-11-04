import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer />}/>
                        <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
                        <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                        <Route path='/cart' element={<Cart />}/>
                        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
            <footer>
                <p>Copyright 2023 &copy;</p>
            </footer>
        </div>
    );
}

export default App;