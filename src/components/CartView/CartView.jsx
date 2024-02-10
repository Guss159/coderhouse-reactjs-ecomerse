import CartItemList from "../CartItemList/CartItemList";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
	const { totalQuantity, totalToPay, clearCart } = useCartContext();

	if (totalQuantity !== 0) {
		return (
			<div>
				<h1>Tu Carrito!</h1>
				<CartItemList />
				<p>Total a pagar: ${totalToPay}</p>
				<button onClick={() => clearCart()}>Vaciar carrito</button>
				<Link to="/checkout">Checkout</Link>
			</div>
		);
	}

	return (
		<div>
			<p>No hay productos en el carrito</p>
			<Link to="/">productos</Link>
		</div>
	);
};

export default CartView;
