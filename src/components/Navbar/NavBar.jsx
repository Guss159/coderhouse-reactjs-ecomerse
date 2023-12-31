import style from "./NavBar.module.css";
import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const dosomething = () => {
    console.log("doing something");
  };

  return (
    <nav>
      <h1 className={style.titulo}>My Ecommerce</h1>
      <div>
        <Button click={dosomething} label={"Celulares"} />
        <Button click={dosomething} label={"Notebooks"} />
        <Button click={dosomething} label={"Tablets"} />
      </div>
      <CartWidget count={0} />
    </nav>
  );
};

export default NavBar;
