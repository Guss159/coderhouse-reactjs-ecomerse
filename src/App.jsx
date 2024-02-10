// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";
import OrderForm from "./components/OrderForm/OrderForm";
import { NotificationProvider } from "./notification/NotificationService";

function App() {
	return (
		<div>
		<NotificationProvider>
		<CartProvider>
			<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/" element={ <ItemListContainer greeting={"Bienvenidos"} /> } />
						<Route path="/category/:categoryId" element={ <ItemListContainer greeting={"Productos filtrados!"} /> } />
						<Route path="/item/:itemId" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<CartView/>} />
						<Route path='/checkout' element={<Checkout />} />
						<Route path="*" element={<h1>404 NOT FOUND</h1>} />
					</Routes>
			</BrowserRouter>
		</CartProvider>
		</NotificationProvider>
		</div>
	);
}
export default App;
