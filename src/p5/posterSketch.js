export default function posterSketch(p) {
  p.setup = () => {
    p.createCanvas(1400, 400);
    p.background(220);
  };

  p.draw = () => {
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
}
