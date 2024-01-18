import style from "./NavBar.module.css";
import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const dosomething = () => {
    console.log("doing something");
  };

  return (
    <nav>
	  <Link to='/'>
      <h1 className={style.titulo}>My Ecommerce</h1>
	  </Link>
      <div>
	  {
        //<Button click={dosomething} label={"Celulares"} />
        //<Button click={dosomething} label={"Notebooks"} />
        //<Button click={dosomething} label={"Tablets"} />
	  }
	  <NavLink to={`/category/celular`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares </NavLink>
	  <NavLink to={`/category/notebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks </NavLink>
	  <NavLink to={`/category/tablet`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
      </div>
      <CartWidget count={0} />
    </nav>
  );
};

export default NavBar;
