const btns = document.querySelectorAll("button");

function makeRandColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}

for (let btn of btns) {
  btn.addEventListener("click", colorize);
}
