import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../service/firebase/products";
import LoadingWidget from "../LoadingWidget/LoadingWidget";

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = useState([]);

	const { categoryId } = useParams();

	//const { showNotification } = useNotification()

	const [loading, setLoading] = useState(true);

	//useEffect(() => {
	//	if(categoryId) document.title = "Ecomerse: " + categoryId
	//	return () => {document.title = "Ecomerse"}
	//})

	useEffect(() => {
		setLoading(true)
		getProducts(categoryId)
			.then((prods) => {
				setProducts(prods);
			})
			.catch((error) => {
				console.log(error, "hubo un error");
				//TODO: show notification
				//showNotification(error, error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [categoryId]);

	if (loading) {
		return <LoadingWidget />;
	}

	return (
		<div>
			<h1>{greeting}</h1>
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;
