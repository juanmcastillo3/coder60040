import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './CardItems.css';
import { CartContext } from "../../context/CartContext"; 

function CardItems(props) {
  const { addItem } = useContext(CartContext); 
  const [quantity, setQuantity] = useState(1); 

  const handleAddToCart = () => {
    const productToAdd = { 
      id: props.id,
      name: props.name,
      image: props.image,
      price: props.precio,
      quantity: quantity, 
    };
    addItem(productToAdd, quantity); 
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <Col className="columna">
      <Card style={{ width: "18rem", maxHeight: "450px" }}> 
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title> 
          <div className="card-buttons">
            <Link className="btn btn-warning btn-lg button-content" to={`/item/${props.id}`}>
              Ver más
            </Link>
            <input 
              type="number" 
              value={quantity} 
              min="1" 
              onChange={handleQuantityChange} 
              className="quantity-input"
              style={{ width: "60px", marginRight: "10px" }}
            />
            <Button variant="outline-warning" onClick={handleAddToCart}> 
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
