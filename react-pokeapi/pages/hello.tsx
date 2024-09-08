import React, { useState } from "react";

function useHello() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <h1>Hello world!</h1>
      </div>
      <div>
        <p>{count}</p>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}

useHello;
