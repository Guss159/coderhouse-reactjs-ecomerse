// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
					<Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos filtrados!"} />} />
					<Route path="/item/:itemId" element={<ItemDetailContainer />} />
					<Route path="*" element={<h1>404 NOT FOUND</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
export default App;
