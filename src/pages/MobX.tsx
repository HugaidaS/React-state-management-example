import React from "react";
import CounterButton from "../mobx/CounterButton";
import { Counter } from "../mobx/Counter";

//we can place this counter in Context provider to share this state with other components
const counter = new Counter();

const MobX = () => {
  return (
    <div>
      <CounterButton counter={counter} />
    </div>
  );
};

export default MobX;
