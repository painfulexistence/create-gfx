const sketch = (s) => {
    s.setup = () => {
        s.createCanvas(400, 400);
        s.background(240);
    };

    s.draw = () => {
        s.circle(200, 200, 100);
    };
}

export default sketch;