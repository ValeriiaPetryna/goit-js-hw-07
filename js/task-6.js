
// Створюємо елементи
const controls = document.querySelector(".controls");
const numberInput = document.querySelector("input");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector("#boxes");
// Додаємо стилі
boxesEl.style.display = 'flex';
boxesEl.style.flexWrap = 'wrap';
boxesEl.style.alignItems = 'center';
boxesEl.style.marginTop = '30px';
numberInput.addEventListener("input", toggleValue);
createBtn.addEventListener("click", () => {
  createBoxes(Number(inputValue));
});
destroyBtn.addEventListener("click", destroyBoxes);
let inputValue = 0;
function toggleValue(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}
function createBoxes(amount) {
  numberInput.value = "";
  boxesEl.innerHTML = "";
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${boxSize}px`;
    newDiv.style.height = `${boxSize}px`;
    newDiv.style.background = getRandomHexColor();
    boxesEl.appendChild(newDiv);
    boxSize += 10;
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
function destroyBoxes() {
  numberInput.value = "";
  boxesEl.innerHTML = "";
}