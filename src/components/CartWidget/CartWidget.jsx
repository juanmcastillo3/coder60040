import { FaShoppingCart } from "react-icons/fa";



const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size="3rem" />
      <span className="cart-notification">0</span>
    </div>
  );
}

export default CartWidget;
