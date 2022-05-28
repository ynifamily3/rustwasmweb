import { add, simulated_expensive_calculation } from "./rust-wasm/pkg";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value))}
      />
      결과: {add(num1, num2)}
      <button
        onClick={() => {
          alert(simulated_expensive_calculation(3939));
        }}
      >
        눌러..!
      </button>
      <div style={{ height: 900, backgroundColor: "darkgreen" }}>넓음.</div>
    </div>
  );
}

export default App;
