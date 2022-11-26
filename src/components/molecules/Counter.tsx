import React from "react";

import Button from "../atoms/Button";

export interface CounterProps {
  limit: number;
}

function Counter({ limit }: CounterProps) {
  const [count, setCount] = React.useState(0);
  const isLimitReached = limit ? count === limit : false;

  return (
    <div className="counter">
      <h3>Counter: {count}</h3>
      <Button
        onClick={() => {
          if (isLimitReached) return;
          setCount(count + 1);
        }}
      >
        Increment
      </Button>
      <Button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </Button>
      {isLimitReached && <span>You reached the limit!</span>}
    </div>
  );
}

export default Counter;
