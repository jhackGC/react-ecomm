import { useContext } from "react";
import { CartContext } from "./contexts";

export default function Header() {
  const [cart] = useContext(CartContext); // no need to pull out the setCart function here, as we are only reading the cart state
  return (
    <nav>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
}
