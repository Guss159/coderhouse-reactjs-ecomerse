import styles from "./CartItem.module.css"
import { useCartContext } from "../../context/CartContext";

const CartItem = ({ id, name, price, quantity }) => {
	const { removeItem } = useCartContext();

	return (
		<div>
			<p>Tu Carrito</p>
			<div className={styles.container}>
				<p>{name}</p>
				<p>Cantidad: {quantity}</p>
				<p>Precio x Unidad: ${price}</p>
				<p>Subtotal: ${price * quantity}</p>
				<button onClick={() => {removeItem(id)}}>X</button>
			</div>
		</div>
	);
};

export default CartItem;
