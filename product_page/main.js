let glasses1 = document.querySelector(".glasses1-img");
let glassesDiv1 = document.querySelector(".glasses-div-1");
let thumbAll = document.querySelector(".thumbAll");

// *************************************************
// Implementing the gallery's thumbnail previews

const bigImg = document.querySelector(".thumb-main-img");
const thumbBar = document.querySelector(".thumbnails-container");

const thumbImages = [
  "glasses 1-1.jpeg",
  "glasses-product-1.png",
  "glasses-intro-img.png",
  "glasses 2-2.jpeg",
];

for (const image of thumbImages) {
  //const newImage = document.createElement("img");
  newImage = document.querySelector(".thumb-all");
  newImage.setAttribute("src", `../images/${image}`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", (e) => (bigImg.src = e.target.src));
}

// thumb1-4
let thumbMainPara = document.querySelector(".thumb-main-text");
const thumbImg1 = document.querySelector(".thumb1");
const thumbImg2 = document.querySelector(".thumb2");
const thumbImg3 = document.querySelector(".thumb3");
const thumbImg4 = document.querySelector(".thumb4");

thumbImg1.addEventListener("click", (e) => {
  thumbMainPara.innerHTML = "Model 1";
});
thumbImg2.addEventListener("click", (e) => {
  thumbMainPara.innerHTML = "Model 1";
});
thumbImg3.addEventListener("click", (e) => {
  thumbMainPara.innerHTML = "Model 2";
});
thumbImg4.addEventListener("click", (e) => {
  thumbMainPara.innerHTML = "Model 2";
});

// To-do: make the submit-text hidden at first, then visible after a mouse click
// submit-text = form submitted paragraph

let submitText = document.getElementsByClassName("submit-text");
for (let i = 0; i < submitText.length; i++) {
  submitText[i].style.visibility = "hidden";
}
// keynote: getElementsByClassName returns an array, so you can't target it as a single property. You need to loop through it. Alternative solution is to use an ID.

//document.getElementById("p2").style.color = "blue";
