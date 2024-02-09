const products = [
	{
		id: "1",
		name: "iphone 12",
		img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
		price: 1000,
		stock: 25,
		description: "Description de Iphone 12",
		category: "celular",
	},
	{
		id: "2",
		name: "Tablet-100%Tablet",
		img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
		price: 5000,
		stock: 5,
		description: "Description de Tablet-100%Tablet",
		category: "tablet",
	}
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (productId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.find(prod => prod.id === productId))
		}, 2000);
	});
};

export const getProductsByCategory = (categoryId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.filter(prod => prod.category === categoryId))
		}, 200);
	});
};
