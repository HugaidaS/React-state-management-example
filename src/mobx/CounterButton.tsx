import React, { useState } from "react";
import { Counter } from "./Counter";
import { observer } from "mobx-react-lite";

interface IProps {
  counter: Counter;
}

const CounterButton = observer(({ counter }: IProps) => {
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <>
      <p>You have clicked the button {counter.numberOfClicks} times.</p>
      <label>
        Increment By:
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button onClick={() => counter.increment(incrementBy)}>Click</button>
    </>
  );
});

export default CounterButton;
