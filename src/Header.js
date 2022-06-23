import { useContext } from "react";
import { context } from "./App";
import { useNavigate  } from "react-router-dom";

export function Header() {
  const cartLink = useNavigate();
  const homeLink = useNavigate();

  let { product } = useContext(context);
  let handleCartItems = () => cartLink("/cartitems");
  let handleHomeItems = () => homeLink("/home");
  return (
    <header className="header">
      <button onClick={handleCartItems}>Cart Items - {product.cartCount}</button>
      <button onClick={handleHomeItems}>Home</button>
    </header>

  );
}
