const products = [
{
  id: "1",
  name: "iphone 12",
  price: 1000,
  category: "celular",
  img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
  stock: 25,
  description: "Description de Iphone 12",
},
{
  id: "2",
  name: "iphone 12222",
  price: 1000,
  category: "celular",
  img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
  stock: 25,
  description: "Description de Iphone 12",
}
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (productId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.find(prod => prod.id === productId))
		}, 1000);
	});
};
