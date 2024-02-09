import cart from "./assets/cart-speed-svgrepo-com.svg";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
	const { totalQuantity } = useCartContext()
	return (
		<>
			<img src={cart} alt="cart-widget" width="100" height="100" />
			{ totalQuantity }
		</>
	);
};
export default CartWidget;
