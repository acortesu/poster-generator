import React from "react";
import WrapperP5 from "./components/WrapperP5";
import posterSketch from "./p5/posterSketch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Poster Generator</h1>
      </header>
      <main>
        <WrapperP5 posterSketch={posterSketch} />
      </main>
    </div>
  );
}

export default App;
