const ColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#DE3163",
  "#3377FF",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#F36605",
  "#40E0D0",
  "#800020",
  "#2ECC71",
];

function getRandomIndex() {
  const randomIndex = Math.floor(ColorsArr.length * Math.random());
  return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = ColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;
