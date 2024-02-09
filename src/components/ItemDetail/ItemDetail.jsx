import styles from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, price, stock, description }) => {
	const [quantityAdded, setQuantityAdded] = useState(0);

	const { addItem } = useCartContext();

	const handleOnAdd = (quantity) => {
		const objProductToAdd = {
			id,
			name,
			price,
			quantity,
		};
		addItem(objProductToAdd);
		console.log("agregue al carrito: ", quantity);
		setQuantityAdded(quantity);
	};

	return (
		<article className={styles.item_detail}>
			<header>
				<h2>{name}</h2>
			</header>
			<picture>
				<img src={img} alt={name} />
			</picture>
			<section>
				<p>Precio: ${price}</p>
				<p>Description: {description}</p>
				<p>Stock disponible: {stock}</p>
			</section>
			<footer>
				{quantityAdded == 0 ? (
					<ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
				) : (
					<Link to="/cart">Finalizar la compra</Link>
				)}
			</footer>
		</article>
	);
};

export default ItemDetail;
