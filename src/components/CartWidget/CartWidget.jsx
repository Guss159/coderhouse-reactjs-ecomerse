import cart from "./assets/cart-speed-svgrepo-com.svg";

const CartWidget = ({ count }) => {
  return (
    <>
      <img src={cart} alt="cart-widget" width="100" height="100" />
      {count}
    </>
  );
};
export default CartWidget;
