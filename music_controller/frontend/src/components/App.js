import React from "react";
import { render } from "react-dom";

function App() {
  return (
    <h1>Disco Baby</h1>
  );
}

const appDiv = document.getElementById("app");
console.log(appDiv);
render (<App />, appDiv);

export default App;