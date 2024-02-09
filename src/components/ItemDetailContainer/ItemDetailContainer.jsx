import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import LoadingWidget from "../LoadingWidget/LoadingWidget";
import { getProductById } from "../../service/firebase/products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState(null);

	const { itemId } = useParams();

	const [loading, setLoading] = useState(true);

	//TODO:  1:32  tittle

	useEffect(() => {
		setLoading(true);
		getProductById(itemId)
			.then((prod) => {
				setProduct(prod);
			})
			.catch((error) => {
				//TODO: notif
				console.log(error, "oops");
			})
			.finally(() => {
				setLoading(false);
			});
	}, [itemId]);

	if (loading) {
		return <LoadingWidget />;
	}

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
