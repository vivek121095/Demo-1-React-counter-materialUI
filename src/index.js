import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Button } from "@material-ui/core";

import "./styles.css";

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <Button
        onClick={() => {
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
      <p>Count: {count}</p>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
