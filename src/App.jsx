import NavBar from "./components/Navbar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailed from "./components/CardItems/DetailedCardContainer.jsx";
import Contact from "./components/Contacto/Contacto.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route main path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailed />} />
        <Route path="/contacto" element={<Contact />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
