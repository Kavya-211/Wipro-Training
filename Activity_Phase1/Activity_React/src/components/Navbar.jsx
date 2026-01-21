function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🥕 VeggieMart</h1>
      <ul className="flex gap-6 font-medium">
        <li className="hover:text-yellow-300 cursor-pointer">Home</li>
        <li className="hover:text-yellow-300 cursor-pointer">Shop</li>
        <li className="hover:text-yellow-300 cursor-pointer">About</li>
        <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
