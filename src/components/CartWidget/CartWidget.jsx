import cart from "./assets/cart-speed-svgrepo-com.svg";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
	const { totalQuantity } = useCartContext();

	const Widget = (
		<Link to="/cart">
			<img src={cart} alt="cart-widget" width="100" height="100" />
			{totalQuantity}
		</Link>
	);

	const Cart = !(totalQuantity == 0) ? Widget : null;

	return Cart;
};

export default CartWidget;
