import { db } from "./firebaseConfig";
import { collection, getDocs, getDoc, doc, where, query } from "firebase/firestore";

export const getProducts = (categoryId) => {
	return new Promise((resolve, reject) => {
		const querySnap = categoryId
			? query(
					collection(db, "products"),
					where("category", "==", categoryId),
				)
			: collection(db, "products");

		getDocs(querySnap)
			.then((response) => {
				const productsAdapted = response.docs.map((doc) => {
					const fields = doc.data();
					return { id: doc.id, ...fields };
				});
				resolve(productsAdapted);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const getProductById = (productId) => {
	return new Promise((resolve, reject) => {
		const docSnap = doc(db, "products", productId);

		getDoc(docSnap)
			.then((response) => {
				const product = { id: response.id, ...response.data() };
				resolve(product);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
