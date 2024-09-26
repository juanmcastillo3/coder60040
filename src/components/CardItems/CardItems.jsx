import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './CardItems.css';

function CardItems(props) {
  return (
    <Col className="columna">
    <Card style={{ width: "22rem", maxHeight: "450px" }}> 
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title> 
        <h6 className="card-price">{props.precio}</h6>
        <div className="card-buttons">
          <Link className="btn btn-primary btn-lg" to={`/item/${props.id}`}>
            Ver más
          </Link>
          <Button variant="outline-primary">
            <h6>
              <FaShoppingCart size="1rem" />
            </h6>
          </Button>
        </div>
      </Card.Body>
    </Card>
  </Col>
  );
}

CardItems.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  precio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CardItems;
