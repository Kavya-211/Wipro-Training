import { useState } from "react";

function App() {
  const [text, setText] = useState("Click the button to interact ✨");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-2xl max-w-md text-center text-white">
        
        <h1 className="text-4xl font-extrabold mb-4 tracking-wide">
          Vite + React 🚀
        </h1>

        <p className="text-lg text-white/90 mb-6">
          This component is styled using Tailwind CSS.  
          Fast builds, clean UI, and smooth interactions.
        </p>

        <button
          onClick={() => setText("Button clicked! Tailwind is awesome 💙")}
          className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Click Me
        </button>

        <p className="mt-6 text-lg font-medium text-emerald-300">
          {text}
        </p>

      </div>
    </div>
  );
}

export default App;
