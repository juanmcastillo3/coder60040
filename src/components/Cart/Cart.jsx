import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Container, Row, Col, Toast, ToastContainer } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom'; 
import './Cart.css'; 

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  const navigate = useNavigate(); 
  const [showToast, setShowToast] = useState(false);

  const total = cart.reduce((accumulator, item) => {
    const price = parseFloat(item.price) || 0; 
    return accumulator + price * item.quantity; 
  }, 0);

  const handleCheckout = () => {
    setShowToast(true);
    setTimeout(() => {
      clear();
      navigate('/'); 
    }, 1000); 
  };

  if (cart.length === 0) {
    return (
      <Container style={{ position: 'relative', height: '100vh', marginTop: '80px' }} className="text-center">
        <h2 className="cart-empty-message">Tu carrito está vacío</h2>
        <Link to="/">
          <Button variant="primary" size="lg" className="regresar-button">
            Regresar al inicio
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Tu carrito de compras</h2>
      <Row>
        {cart.map((item) => (
          <Col key={item.id} md={4}>
            <div className="cart-item">
              <h4>{item.name}</h4>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
              <Button
                variant="danger"
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </Button>
            </div>
          </Col>
        ))}
      </Row>
      <div className="total-and-clear">
        <h4 className="mt-3">Total: ${total.toFixed(2)}</h4> 
        <Button
          variant="warning"
          className="mt-3"
          onClick={clear}
        >
          Vaciar carrito
        </Button>

        <Button
          variant="success"
          className="mt-3"
          onClick={handleCheckout}
        >
          Terminar mi compra
        </Button>
      </div>

      <ToastContainer position="top-center" className="p-3">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={10000} autohide>
          <Toast.Body>Compra exitosa</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default Cart;
