import { useState, createContext, useContext } from "react";

const CartContext = createContext({
	cart: [],
	addItem: () => {},
	removeItem: () => {},
	totalQuantity: 0,
	total: 0,
});

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	console.log(cart)

	const addItem = (productToAdd) => {
		if (!isInCart(productToAdd.id)) {
			setCart((prev) => [...prev, productToAdd]);
		} else {
			// TODO: add the amount to the total
			console.log("El producto ya esta agregado");
		}
	};

	const isInCart = (id) => {
		return cart.some((prod) => prod.id === id);
	};

	const removeItem = (id) => {
		const cartUpdated = cart.filter((prod) => prod.id === id);
		setCart(cartUpdated);
	};

	const getTotalQuantity = () => {
		let accu = 0
		cart.forEach(prod => {
			accu += prod.quantity
		})
		return accu
	};

	const getTotalToPay = () => {
		//  TODO:
		let toPay = 0
		cart.forEach(prod => {
			toPay += (prod.quantity * prod.price)
		})
		return toPay
	};

	const clearCart = () => {
		setCart([])
	}

	// i can share the value instead of the function
	const totalQuantity = getTotalQuantity()
	const totalTopay = getTotalToPay()

	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, totalTopay, clearCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(CartContext)
};
