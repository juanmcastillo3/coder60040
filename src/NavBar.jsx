import CartWidget from "./CartWidget";
import logo from "./assets/logo-gaucho.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-categories">
        <li>
          <a href="#category1">Home</a>
        </li>
        <li>
          <a href="#category2">Nosotros</a>
        </li>
        <li>
          <a href="#category3">Productos</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
