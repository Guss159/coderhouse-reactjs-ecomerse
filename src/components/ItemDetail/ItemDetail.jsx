import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({id, name, img, description, price, stock}) => {
	return (
		<article className="CardItem">
		<header className="Header">
		<h2 className="ItemHeader">
		{name}
		</h2>
		</header>
		<picture>
			<img src={img} alt={name} className="ItemImg" />
		</picture>
		<section>
			<p className="Info">
			Precio: ${price}
			</p>
			<p className="Info">
			Description: {description}
			</p>
			<p className="Info">
			Stock disponible: {stock}
			</p>
		</section>
		<footer className="ItemFooter">
			<ItemCount initial={0} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
		</footer>
		</article>
	);
};

export default ItemDetail;
