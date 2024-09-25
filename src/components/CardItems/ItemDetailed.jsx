import PropTypes from "prop-types"; // Importa prop-types
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button, Container, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./ItemDetailed.css";
import products from "../Products/products.js";

function ItemDetailed(props) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado</p>; // Manejo de error
  }
  return (
    <Container className="container-detailed">
      <Row>
        <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.category}</Card.Text>
            <Card.Text>{props.description}</Card.Text>
            <h6 className="card-price">{props.precio}</h6>
            <div className="card-buttons">
              <Button variant="outline-primary">
                <h6>
                  <FaShoppingCart size="1rem" />
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

// Definición de las props esperadas usando prop-types
ItemDetailed.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ItemDetailed;
