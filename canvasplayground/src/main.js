const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");

function draw() {
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * w - 50;
        const y = Math.random() * h - 100;
        ctx.drawImage(img, x, y);
    }
}

const img = new Image();
img.src = "res/images/Get_Rick_Rolled.webp";
img.addEventListener("load", draw, false);

