import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🥕 VeggieMart</h1>

      <ul className="flex gap-6 font-medium">
        <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
        <li><Link to="/shop" className="hover:text-yellow-300">Shop</Link></li>
        <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>

        {/* 🟢 ADMIN PAGE */}
        <li>
          <Link to="/admin" className="hover:text-yellow-300">
            Admin 
          </Link>
        </li>

        <li className="relative">
          <Link to="/cart" className="hover:text-yellow-300">
            Cart 🛒
            {totalItems > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
