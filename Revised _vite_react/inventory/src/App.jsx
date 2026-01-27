import { useState } from "react";

function App() {
  const [stock, setStock] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 text-center">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Inventory Manager
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Current Stock:
          <span className="ml-2 font-semibold text-green-600">
            {stock}
          </span>
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setStock(stock + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Add Stock
          </button>

          <button
            onClick={() => setStock(stock - 1)}
            disabled={stock === 0}
            className={`px-4 py-2 rounded-lg transition
              ${
                stock === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
          >
            Remove Stock
          </button>
        </div>

        {stock === 0 && (
          <p className="text-sm text-red-500 mt-4">
            Stock is empty. Cannot remove more items.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
