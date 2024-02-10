import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";

// TODO: this is just the itemlist ItemList, probably can merge them and
// avoid repeating logic.
const CartItemList = () => {
	const { cart } = useCartContext();

	return (
		<div>
			{cart.map((prod) => (
				<CartItem key={prod.id} {...prod} />
			))}
		</div>
	);
};

export default CartItemList;
