import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState(null);

	const { itemId } = useParams();

	useEffect(() => {
		getProductById(itemId)
			.then((response) => {
				setProduct(response);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [itemId]);

	if (!product) {
		// BUG: will appear while loading
		return <h1>El producto no existe</h1>;
	}

	return (
		<div>
			<ItemDetail {...product} />
		</div>
	);
};

export default ItemDetailContainer;
