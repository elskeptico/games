//setup
const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
import KeyControls from "../src/KeyControl.js"
let x = w / 2;
let y = h / 2;
let color = 0;
const controls = new KeyControls();

function loopy(t) {
    requestAnimationFrame(loopy);

    //logic
    x += controls.x;
    y += controls.y;
    if (!controls.aaction) {
        color += 10;
        if (color > 360) {
            color -= 360;
        }
    }

    //draw the rectangle
    ctx.fillStyle = `hsl(${color}, 50%, 50%)`;
    ctx.fillRect(x, y, 50, 50);
}
requestAnimationFrame(loopy);