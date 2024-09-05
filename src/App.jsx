import NavBar from './NavBar.jsx';
import ItemListContainer from './ItemListContainer.jsx';
import './App.css';

function App() {
  return (
    <nav className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la mejor pizzería de Argentina!" />
    </nav>
  );
}

export default App;
