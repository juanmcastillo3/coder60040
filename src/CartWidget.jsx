import cartIcon from './assets/cart-icon.png'; 

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Cart" className="cart-icon" /> 
      <span className="cart-notification">0</span>
    </div>
  );
}

export default CartWidget;
