import { useParams } from "react-router-dom";
import Spinner from "./Loading";
import ItemDetailed from "./ItemDetailed";
import { useState, useEffect, useContext } from "react";
import products from "../../products/products.js"
import { CartContext } from "../../context/CartContext"; 

function ItemDetailContainer() {
    const [data, setData] = useState(null); // Producto específico
    const { id } = useParams();
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = () => {
            const product = products.find((p) => p.id === parseInt(id)); // Buscar el producto por id
            if (product) {
                setData(product);
            } else {
                console.error("No se encontró el producto");
            }
        };

        fetchProduct();
    }, [id]);

    // Si el producto no se ha cargado, mostrar el spinner
    if (!data) {
        return <Spinner />;
    }

    const handleAddToCart = (quantity) => {
        addItem(data, quantity);
    };

    return (
        <ItemDetailed
            key={data.id}
            name={data.name}
            description={data.description}
            imagen={data.image}
            category={data.category}
            precio={data.price}
            onAddToCart={handleAddToCart}
        />
    );
}

export default ItemDetailContainer;
