const images = ["001.jpeg", "002.jpeg", "003.jpeg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;
bgImg.setAttribute("id", "bgImg");

document.body.appendChild(bgImg);