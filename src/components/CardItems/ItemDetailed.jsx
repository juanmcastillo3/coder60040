import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./ItemDetailed.css";
import products from "../Products/products.js";
import { CartContext } from "../../context/CartContext";

function ItemDetailed(props) {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <Container className="container-detailed">
      <Row>
        <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title className="name-text">{product.name}</Card.Title>
            <Card.Text className="category-text">{props.category}</Card.Text>
            <Card.Text>{props.description}</Card.Text>
            <h4 className="card-price">{props.precio}</h4>
            <div className="card-buttons">
              <Button
                variant="warning"
                size="lg"
                className="w-100 d-flex align-items-center justify-content-center"
                onClick={() => addToCart(product)}
              >
                <h6>
                  <FaShoppingCart size="1rem" className="me-2" />
                  Agregar
                </h6>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

ItemDetailed.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ItemDetailed;
