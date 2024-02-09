import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { db } from "../../service/firebase/firebaseConfig";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = useState([]);

	const { categoryId } = useParams();

	//const { showNotification } = useNotification()

	// const [loading, setLoading] = useState(true);

	//useEffect(() => {
	//	if(categoryId) document.title = "Ecomerse: " + categoryId
	//	return () => {document.title = "Ecomerse"}
	//})

	useEffect(() => {
		const productsCollection = categoryId
			? query(collection(db, "products"), where("category", "==", categoryId))
			: collection(db, "products")
		// setLoading(true)

		getDocs(productsCollection)
			.then((querySnap) => {
				const productsAdapted = querySnap.docs.map((doc) => {
					const fields = doc.data();
					return { id: doc.id, ...fields };
				});
				setProducts(productsAdapted);
			})
			.catch((error) => {
				//TODO: show notification
				//showNotification(error, error);
				console.log(error, "hubo un error");
			});
		//.finally(() => {setLoading(false)})
	}, [categoryId]);

	//if(loading){
	//	return <h1>Cargando los productos...</h1>
	//}

	return (
		<div>
			<h1>{greeting}</h1>
			<ItemList products={products} />
		</div>
	);
};

export default ItemListContainer;
