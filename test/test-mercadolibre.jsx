import { useEffect } from "react";

const MercadoLibre = () => {
	const [products, setProducts] = useEffect([]);
	const [input, setInput] = useState("");

	const search = (e) => {
		e.preventDefault();
		fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
			.then((response) => {
				return response.json();
			})
			.then((json) => setProducts(json.result.slice(0, 10)));
	};

	products.map((prod) => {
		// TODO: dont use <h> for font size control, use article to separate  insted of dive in :25?
		return (
			<>
				<h1>MercadoLibre</h1>
				<form onSubmit={search}>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button>Searh</button>
				</form>
				<div key={prod.id} style={{ margin: 58 }}>
					<h2>{prod.title}</h2>
					<img src={prod.thumbnail} />
					<h3>${prod.price}</h3>
					<button>COMPRAR</button>
				</div>
			</>
		);
	});
};

export default MercadoLibre;
