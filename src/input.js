import React, { useState, useEffect } from "react";

const InputComponent = (props) => {
  const input = props.input;

  if (input === false) {
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setDateState(new Date());
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);
    return (
      <div>
        <p>
          {" "}
          {dateState.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
          })}
        </p>

        <p>
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true
          })}
        </p>
      </div>
    );
  } else if (input instanceof Array) {
    return (
      <div>
        {input.map((item) => (
          <li>{item}</li>
        ))}
      </div>
    );
  } else {
    return <div>{input}</div>;
  }
};

export default InputComponent;
