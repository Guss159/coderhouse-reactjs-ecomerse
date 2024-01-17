//TODO: styles
//import '.ItemList.css'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
	// TODO: use module in className
	return (
		<div className='ListGroup'>
		{products.map(prod => <Item key={prod.id} {...prod} />)}
		</div>
	);
};

export default ItemList;
