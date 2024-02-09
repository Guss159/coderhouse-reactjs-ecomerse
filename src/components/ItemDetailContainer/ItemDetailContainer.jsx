import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../service/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState(null);

	const { itemId } = useParams();

	useEffect(() => {
		//TODO: loading 1:32 and tittle

		// TODO: make getproducts() estoy obteniendo y manejando la fuente de los datos
		const productDocument = doc(db, "products", itemId);
		getDoc(productDocument)
			.then((docSnap) => {
				const fields = docSnap.data();
				const productAdapted = {
					id: docSnap.id,
					...fields,
				};
				setProduct(productAdapted);
			})
			.catch((error) => {
				//TODO: notif
				console.log(error);
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
