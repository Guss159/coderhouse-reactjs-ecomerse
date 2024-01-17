// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemCount from "./components/ItemCount/ItemCount";
//<ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
    </div>
  );
}
export default App;
