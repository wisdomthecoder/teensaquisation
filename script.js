let imgs = [
  "asset/IMG-20240813-WA0009.jpg",
  "asset/IMG-20240813-WA0008.jpg",
  "asset/bread.jpg",
  "asset/download.jpeg",
  "asset/hh.webp",
  "asset/hhdfsd.webp",
  "asset/vaselin.jpg",
  //   "asset/ICON.png",
];
let index = 0;

let img = document.getElementById("img");

setInterval(changeImg, 5000);
function changeImg() {
  if (index < 5) {
    index++;
    img.src = imgs[index];
  } else {
    index = 0;
    img.src = imgs[index];
  }
}
