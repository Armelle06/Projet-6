// ajout des chemins pour les images
let slides = [
  {
    image: "assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

console.log("nombres de slides : " + slides.length);

//recuperation la div"dots"
let dots = document.querySelector(".dots");
console.log("dot créés");

// creation des bulletPoint = lot (L.27)
let boule = `<div class="dot"></div>`;
console.log("4 dots");

//integrer en html:le lot  ( =le nombres de slides total)
dots.innerHTML = `${boule.repeat(slides.length)}`;

//declarer le 1er en dot _selected = point selectionné en css
dots.firstChild.className = "dot dot_selected";

//fonction qui gere les dots
let bouleSelected = 0;

function changeDot(sens) {
  bouleSelected = bouleSelected + sens;
  boulePrecedent = bouleSelected - sens;
  // permet de revenir au premier point
  // si le point est plus grand que la totalité du lot = il revient a 0
  if (bouleSelected > dots.childNodes.length - 1) {
    bouleSelected = 0;
  }
  //permet d'aller au dernier point
  // si le point est plus petit que la totalité du lot = il devient la dernier dot du lot
  if (bouleSelected < 0) {
    bouleSelected = dots.childNodes.length - 1;
  }
  console.log(dots.childNodes[bouleSelected]);
  dots.childNodes[boulePrecedent].className = "dot";
  dots.childNodes[bouleSelected].className = "dot dot_selected";
}

//fonction qui gere le carousel

let numero = 0;

function changeSlide(sens) {
  numero = numero + sens;
  // permet de revenir a la premiere img
  if (numero > slides.length - 1) {
    numero = 0;
  }
  //permet de revenir a la dernière img
  if (numero < 0) {
    numero = slides.length - 1;
  }

  // Permet de changer la source de la class banner-img (L.22)
  document.querySelector(".banner-img").src = slides[numero].image;

  //permet de changer la source de la classe tagline (L.26)
  document.querySelector(".tagLine").innerHTML = `${slides[numero].tagLine}`;
}

// recuperation fleche gauche (L.31)
let arrowLeft = document.getElementById("arrowLeft");
console.log("test1");

arrowLeft.addEventListener("click", function () {
  changeSlide(-1);
  changeDot(-1);
  console.log("click gauche!");
});

// recuperation fleche droite  (L.32)
let arrowRight = document.getElementById("arrowRight");
console.log("test2");

// fonction evenement au click
arrowRight.addEventListener("click", function () {
  changeSlide(+1);
  changeDot(+1);
  console.log("click droit !");
});
