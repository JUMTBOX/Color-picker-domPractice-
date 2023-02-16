const button = document.querySelector("button");
const h1 = document.querySelector("h1");

function makeRandColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}
function colorize() {
  h1.innerText = makeRandColor();
  document.body.style.backgroundColor = makeRandColor();
  document.body.style.color = makeRandColor();
}

button.addEventListener("click", colorize);
