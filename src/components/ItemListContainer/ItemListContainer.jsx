import "./ItemListContainer.css";
import fetchSimulation from "../../FetchSimulation";
import CardItems from "../CardItems/CardItems";
import products from "../Products/products";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { idCategory } = useParams(); // Obtenemos el idCategory de los parámetros de la URL

    useEffect(() => {
        // Filtrar productos según la categoría si está definida
        if (idCategory) {
            const filteredProducts = products.filter((product) => 
                product.category.toLowerCase() === idCategory.toLowerCase()
            );
            fetchSimulation(filteredProducts, 2000)
                .then((response) => setData(response))
                .catch((error) => console.log(error));
        } else {
            // Si no hay categoría, obtener todos los productos
            fetchSimulation(products, 2000)
                .then((response) => setData(response))
                .catch((error) => console.log(error));
        }
    }, [idCategory]);

    return (
        <Container>
            {data.length > 0 ? (
                data.map((product) => (
                    <CardItems
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        name={product.name} // Ajusta el nombre según tu objeto product
                        category={product.category}
                        precio={product.price} // Ajusta el nombre según tu objeto product
                    />
                ))
            ) : (
                <p>No se encontraron productos en esta categoría.</p>
            )}
        </Container>
    );
};

export default ItemListContainer;
