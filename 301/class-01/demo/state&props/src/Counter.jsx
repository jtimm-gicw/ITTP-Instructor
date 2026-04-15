import { useState } from "react";

function Counter(props) {

  // ===============================
  // STEP 1 — BASIC STATE
  // ===============================

  // Uncomment for basic state demo
  // const [count, setCount] = useState(0);

  // ===============================
  // STEP 2 — STATE FROM PROPS
  // ===============================

  // Uncomment for combined demo
  const [count, setCount] = useState(props.start || 0);

  // ===============================
  // FUNCTION TO UPDATE STATE
  // ===============================

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}

export default Counter;