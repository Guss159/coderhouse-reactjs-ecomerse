//TODO: css
import { useState, useEffect } from "react";
import { getProducById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
	const[product, setProduct] = useState(null)

	// useEffect(() |)
	useEffect(() => {
		// TODO: remove hardcode value
		getProducById('1')
			.then(response => {
				setProduct(response)
			})
			.catch(error => {
				console.error(error)
			})
	}, [])

	return (
		<div className="ItemDetailContainer">
		<ItemDetail {...product} />
		</div>
	);
};

export default ItemDetailContainer;
