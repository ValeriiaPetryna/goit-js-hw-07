
// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента(тегу < h2 >)
// і кількість елементів у категорії(усіх < li >, вкладених у нього).


// На що буде звертати увагу ментор при перевірці:

// Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і
//  методів DOM - елементів
// Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу
// forEach()
// У консолі має бути виведено наступне повідомлення:

const list = document.querySelectorAll(".item")
// console.log(list);
console.log(`Number of categories: ${list.length}`);

const titles = document.querySelectorAll("h2");
// console.log(titles);
titles.forEach(function (title) {
    const titleName = title.textContent;
    console.log(`Category: ${titleName}`);
    const categoriesNames = title.parentElement.querySelectorAll("ul>li")
    console.log(`Elements: ${categoriesNames.length}`);
});