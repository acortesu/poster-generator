import React, {useEffect} from "react";
import p5 from "p5";
import posterSketch from "./p5/posterSketch";

function App() {
    useEffect(() => {
        const sketch = new p5(posterSketch);
        return () => {
            sketch.remove();
        };
    }, []);

    return (
        <div className="App">
            <h1>Bauhaus poster generator</h1>
            <div id="canvasContainer"></div>
        </div>
    );
}

export default App;
