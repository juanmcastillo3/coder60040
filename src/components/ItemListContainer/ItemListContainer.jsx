import "./ItemListContainer.css";
import fetchSimulation from "../../FetchSimulation";
import CardItems from "../CardItems/CardItems";
import products from "../Products/products";
import Container from "react-bootstrap/Container";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { idCategory } = useParams();

    useEffect(() => {
        setLoading(true); 
        if (idCategory) {
            const filteredProducts = products.filter((product) => 
                product.category.toLowerCase() === idCategory.toLowerCase()
            );
            fetchSimulation(filteredProducts, 2000)
                .then((response) => {
                    setData(response);
                    setLoading(false); 
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false); 
                });
        } else {
            fetchSimulation(products, 2000)
                .then((response) => {
                    setData(response);
                    setLoading(false); 
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false); 
                });
        }
    }, [idCategory]);

    return (
        <Container>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <Spinner animation="border" role="status" style={{ width: "6rem", height: "6rem" }}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                data.length > 0 ? (
                    data.map((product) => (
                        <CardItems
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            category={product.category}
                            precio={product.price}
                        />
                    ))
                ) : (
                    <p>No se encontraron productos en esta categoría.</p>
                )
            )}
        </Container>
    );
};

export default ItemListContainer;