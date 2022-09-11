import { useSelector, useDispatch } from "react-redux";
import { numberOfClicksSelector } from "./selectors";
import { counterButtonClicked } from "./actions";
import { useState } from "react";

export const CounterButton = () => {
  const numberOfClicks = useSelector(numberOfClicksSelector);
  const [incrementBy, setIncrementBy] = useState(1);
  const dispatch = useDispatch();

  return (
    <>
      <p>You have clicked the button {numberOfClicks} times.</p>
      <label>
        Increment By:
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button onClick={() => dispatch(counterButtonClicked(incrementBy))}>
        Click
      </button>
    </>
  );
};
