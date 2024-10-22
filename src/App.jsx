import NavBar from "./components/Navbar/NavBar.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailed from "./components/CardItems/DetailedCardContainer.jsx";
import Contact from "./components/Contacto/Contacto.jsx";
import Cart from "./components/Cart/Cart.jsx";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route main path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailed />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;