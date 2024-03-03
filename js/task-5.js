function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}  

let randomColor = getRandomHexColor();
const button = document.querySelector(".change-color");
button.addEventListener("click", () => {
  const colorSpan = document.querySelector(".color");
  const body = document.querySelector("body");
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

