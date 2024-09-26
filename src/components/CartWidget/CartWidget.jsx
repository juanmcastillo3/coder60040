import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext); 

  return (
    <div className="cart-widget">
      <FaShoppingCart size="3rem" />
      <span className="cart-notification">{cartItems}</span>
    </div>
  );
};

export default CartWidget;
