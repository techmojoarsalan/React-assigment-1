import React from "react";
import Second from "./Second";
import Parent from "./Parent";

function App() {
  const JSX = (
    <div>
      <h1>Hello World</h1>

      <p>Lets render this to the DOM</p>
    </div>
  );
  return (
    <div>
      {JSX}
      <hr />
      <Second />
      <hr />
      <Parent />
    </div>
  );
}
export default App;
