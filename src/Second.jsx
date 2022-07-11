import React from "react";

function Second() {
  const jsx = (
    <div>
      <h1>First element</h1>
      <p>Second element </p>
      <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </ul>
    </div>
  );
  return <div> {jsx} </div>;
}

export default Second;
