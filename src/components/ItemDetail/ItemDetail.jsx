import styles from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, img, price, stock, description}) => {
	const [quantityAdded, setQuantityAdded] = useState(0)
	//const [inputType, setInputType] = useState('button')
	//const ItemCount = inputType === 'input' ? InputCount : ButtonCount

	const handleOnAdd = (quantity) => {
		const objProductToAdd = {
			id, name, price, quantity
		}
		console.log(objProductToAdd)
		console.log('agregue al carrito: ', quantity)
		setQuantityAdded(quantity)
	}

	return (
		<article className={styles.item_detail}>
			<header className="Header">
				<h2 className="ItemHeader">
					{name}
				</h2>
			</header>
			<picture>
				<img src={img} alt={name} className="ItemImg" />
			</picture>
			<section>
				<p className="Info">
					Precio: ${price}
				</p>
				<p className="Info">
					Description: {description}
				</p>
				<p className="Info">
					Stock disponible: {stock}
				</p>
			</section>
			<footer className="ItemFooter">
				{
					quantityAdded == 0
					? <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
					: <Link to='/cart'>Finalizar la compra</Link>
				}
			</footer>
		</article>
	);
};

export default ItemDetail;
