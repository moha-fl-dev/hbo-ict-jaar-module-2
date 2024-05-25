import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => setCount((count) => count + 1)}
        className="inline-flex items-center justify-center px-4 py-2 text-base text-white
        bg-blue-600 rounded-md hover:bg-blue-700 border-blue-600 
        transition-colors"
      >
        <span>Count: {count}</span>
      </button>
    </div>
  );
}

export default App;
