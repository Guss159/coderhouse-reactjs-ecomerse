import styles from "./CartItem.module.css"
import { useCartContext } from "../../context/CartContext";

const CartItem = ({ id, name, price, quantity }) => {
	const { totaltoPay, removeItem } = useCartContext();

	return (
		<div>
			<p>Tu Carrito</p>
			<div className={styles.container}>
				<p>{name}</p>
				<p>Cantidad: {quantity}</p>
				<p>Precio x Unidad: ${price}</p>
				<p>Subtotal: {totaltoPay}</p>
				<button onClick={() => {removeItem(id)}}>X</button>
			</div>
		</div>
	);
};

export default CartItem;
