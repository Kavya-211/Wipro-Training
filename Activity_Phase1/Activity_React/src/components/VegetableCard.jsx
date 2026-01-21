function VegetableCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 hover:scale-105 transition">
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold text-green-700">{name}</h3>
      <p className="text-gray-600 mb-3">₹ {price} / kg</p>
      <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}

export default VegetableCard;
