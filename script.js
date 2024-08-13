let imgs = [
  "asset/download (1).jpeg",
  "asset/download (2).jpeg",
  "asset/download.jpeg",
  "asset/hh.webp",
  "asset/hhdfsd.webp",
  //   "asset/ICON.png",
];
let index = 0;

let img = document.getElementById("img");

setInterval(changeImg, 4000);
function changeImg() {
  if (index < 4) {
    index++;
    img.src = imgs[index];
  } else {
    index = 0;
    img.src = imgs[index];
  }
}
