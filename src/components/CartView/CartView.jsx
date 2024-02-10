import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
	const { cart, totalQuantity, totalToPay, clearCart } = useCartContext();

	if (totalQuantity !== 0) {
		return (
			<div>
				<h1>Tu Carrito!</h1>
				<div>
					{cart.map((prod) => (
						<CartItem key={prod.id} {...prod} />
					))}
				</div>
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
