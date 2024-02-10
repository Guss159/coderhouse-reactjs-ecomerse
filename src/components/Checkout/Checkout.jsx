import OrderForm from "../OrderForm/OrderForm";
import { useCartContext } from "../../context/CartContext";
import LoadingWidget from "../LoadingWidget/LoadingWidget";

import { useState } from "react"
import { collection, getDocs, where, query, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig";
import { useNotification } from "../../notification/NotificationService";

const Checkout = () => {
	const [loading, setLoading] = useState(false);
	const { cart, clearCart, totalToPay,} = useCartContext;
	const { showNotification } = useNotification()
	const [orderId, setOrderId] = useState(null);

	// TODO: turn this into a promise, and separate the db logic.
	const createOrder = async (userData) => {
		setLoading(true);
		try {
			console.log("createOrder");
			console.log(userData);

			const objOrder = {
				buyer: userData,
				items: cart,
				totalToPay,
			};

			const batch = writeBatch(db);
			const outOfStock = [];

			const ids = cart.map((prod) => prod.id);
			const productsCollection = query(
				collection(db, "products"),
				where(documentId(), "in", ids),
			);

			// getDocs(productsCollection).then(querySnapshot => {})
			const querySnapshot = await getDocs(productsCollection);
			const { docs } = querySnapshot;

			docs.forEach((doc) => {
				const fields = doc.data();
				const stockDb = fields.stock;

				const productsAddedToCart = cart.find(
					(prod) => prod.id === doc.id,
				);
				const prodQuantity = productsAddedToCart.quantity;
				console.log(stockDb >= prodQuantity);form
				if (stockDb >= prodQuantity) {
					batch.update(doc.ref, { stock: stockDb - prodQuantity });
				} else {
					outOfStock.push({ id: doc.id, ...fields });
				}
			});

			if (outOfStock.length === 0) {
				batch.commit();

				const orderCollection = collection(db, "orders");
				const { id } = await addDoc(orderCollection, objOrder);

				setOrderId(id);

				clearCart();
			} else {
				console.log(error)
				showNotification(
					"error",
					"Hay productos que no tienen stock disponible",
				);
			}
		} catch (error) {
				console.log(error)
			showNotification("error", "Hubo un error al crear la orden");
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return <LoadingWidget />;
	}

	if (orderId) {
		return <h1>El id de su compra es: {orderId}</h1>;
	}

	return (
		<div>
			<OrderForm onSubmit={createOrder} />
			<button>orden place holder</button>
		</div>
	);
};

export default Checkout;
