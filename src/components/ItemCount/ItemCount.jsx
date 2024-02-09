import style from "./ItemCount.module.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className={style.item_count}>
      <div className={style.button_container}>
        <button className={style.button} onClick={decrement}>
          -
        </button>
        <p className={style.number}> {quantity} </p>
        <button className={style.button} onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
