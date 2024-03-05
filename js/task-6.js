
// Створюємо елементи
const controls = document.querySelector("controls");
const numberInput = document.querySelector("input");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector("#boxes");

// Даємо стилі
boxesEl.style.display = 'flex';
boxesEl.style.flexWrap = 'wrap';
boxesEl.style.alingItems = 'center';
boxesEl.style.marginTop = '30px';

numberInput.addEventListener("input", toogleValue);
createBtn.addEventListener("click", () => {
  createBoxes(number(numberInput.value));
});

destroyBtn.addEventListener("click", destroyBoxes);
let inputValue = 0;
function toogleValue(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);

}

function createBoxes(amount) {
  boxesEl.innerHTML = "";
  let boxsize = 30;
  let emptyArray = [];
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = `<div style = "width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    numbers.push(i);
    newDiv.join("")
    boxesEl.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
  return
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  numberInput.value = "";
  return (boxesEl.innerHTML = "");
}