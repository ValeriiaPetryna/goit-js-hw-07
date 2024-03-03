const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const list = document.querySelector(".gallery");
images.forEach(function(image) {
  const listItem = document.createElement("li");
  listItem.className = "list";
  const imageItem = document.createElement("img");
  imageItem.src = image.url;
  imageItem.alt = image.alt;
  imageItem.className = "photo";
  listItem.appendChild(imageItem);
  list.appendChild(listItem);
});

list.style.display = "flex";
list.style.width = "360px";
list.style.height = "300px";
list.style.gap = "60px";
// imageItem.style.display = "block";
// imageItem.style.maxWidth = "100%";
// imageItem.style.flexDirection = "row";
// imageItem.style.justifyContent = "center";
// imageItem.style.flexWrap = "wrap";