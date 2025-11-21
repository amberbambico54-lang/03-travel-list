import { useState } from "react";

function Challenge() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("Mon Jan 1 2025");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <div>
          <input
            type="range"
            min={1}
            max={10}
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span>Step : {step}</span>
        </div>
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>{step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <div>
        {Math.abs(count)}
        {count === 0
          ? " Today is "
          : count > 0
          ? " Days from now "
          : " Days ago "}
        {date.toDateString()}
      </div>

      {count !== 0 || step !== 1 ? <ResetButton onReset={handleReset} /> : null}
    </div>
  );
}

function ResetButton({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default Challenge;
