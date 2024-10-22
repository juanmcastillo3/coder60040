import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  
  if (totalItems === 0) {
    return null; 
  }

  return (
    <Link to="/cart">
      <div className="cart-widget">
        <FaShoppingCart />
        {totalItems > 0 && <span className="item-count">{totalItems}</span>}
      </div>
    </Link>
  );
};

export default CartWidget;
