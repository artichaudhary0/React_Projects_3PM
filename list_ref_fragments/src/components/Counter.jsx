import React, { Fragment, useEffect, useState } from "react";

const Counter = ({ theme }) => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const [autoIncrement, setAutoIncrement] = useState(() => {
    const savedAutoIncrement = localStorage.getItem("autoIncrement");
    return savedAutoIncrement === "true";
  });

  const [incrementValue, setIncrementValue] = useState(() => {
    const savedIncrementValue = localStorage.getItem("incrementValue");
    return savedIncrementValue ? parseInt(savedIncrementValue, 10) : 1;
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  useEffect(() => {
    localStorage.setItem("autoIncrement", autoIncrement.toString());
  }, [autoIncrement]);

  useEffect(() => {
    localStorage.setItem("incrementValue", incrementValue.toString());
  }, [incrementValue]);

  useEffect(() => {
    let interval;

    if (autoIncrement) {
      interval = setInterval(
        () => setCount((prevCount) => prevCount + incrementValue),
        1000
      );
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoIncrement, incrementValue]);

  const handleReset = () => {
    setCount(0);
    setAutoIncrement(false);
  };

  const inputStyle = {
    padding: "10px",
    border: `1px solid ${theme === "light" ? "#ddd" : "#444"}`,
    borderRadius: "5px",
  };

  const buttonStyle = {
    padding: "8px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
  };

  return (
    <Fragment>
      <h2>Counter</h2>
      <p>Using useState and useEffect hooks</p>

      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "20px" }}>{count}</h1>

        <div>
          <label htmlFor="increment">Increment Amount</label>
          <input
            type="number"
            value={incrementValue}
            onChange={(e) => setIncrementValue(Number(e.target.value))}
            min="1"
            max="100"
            style={inputStyle}
          />
          <div>
            <button
              onClick={() => setCount(count - incrementValue)}
              style={{
                ...buttonStyle,
                backgroundColor: theme === "light" ? "black" : "#555",
              }}
            >
              -
            </button>

            <button
              onClick={() => setCount(count + incrementValue)}
              style={{
                ...buttonStyle,
                backgroundColor: theme === "light" ? "black" : "#555",
              }}
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={handleReset}
              style={{
                ...buttonStyle,
                backgroundColor: theme === "light" ? "black" : "#555",
              }}
            >
              Reset
            </button>

            <button
              onClick={() => setAutoIncrement(!autoIncrement)}
              style={{
                ...buttonStyle,
                backgroundColor: theme === "light" ? "black" : "#555",
              }}
            >
              Auto Increment {autoIncrement ? "Stop" : "Start"}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;
