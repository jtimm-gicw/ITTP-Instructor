import { useState } from "react";
import UserProfile from "./UserProfile";
import Counter from "./Counter";

function App() {

  // ===============================
  // PART 1 — PROPS DEMO
  // ===============================

  const user = {
    name: "Alice",
    bio: "Loves React",
  };

  // ===============================
  // PART 3 — COMBINED PROPS + STATE
  // ===============================

  // Uncomment later during lesson
  // const startValue = 5;

  return (
    <div>
      <h1>React Props & State Demo</h1>

      {/* ===============================
          STEP 1 — PROPS DEMO
      =============================== */}

      {/* Uncomment to show props */}
      {/* 
      <UserProfile 
        name={user.name} 
        bio={user.bio} 
      />
      */}

      {/* ===============================
          STEP 2 — STATE DEMO
      =============================== */}

      {/* Uncomment to show state */}
      {/* <Counter /> */}

      {/* ===============================
          STEP 3 — COMBINED DEMO
      =============================== */}

      {/* Uncomment for combined example */}
      {/*
      <Counter start={startValue} />
      */}

    </div>
  );
}

export default App;