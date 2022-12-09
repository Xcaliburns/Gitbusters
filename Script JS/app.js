let imgSlider = document.getElementsByClassName("imgSlider");
const dev = document.querySelector(".dev-name");
let etape = 0;
const devName = ["Antoine", "Cassandra", "Claudia", "David", "Pierre"];
const newH2 = document.createElement("h2"); //creation du h2
newH2.textContent = devName[0]; //creation du contenu
dev.append(newH2); //insertion du h2

let nbrImg = imgSlider.length;

let precedent = document.querySelector(".precedent");
let suivant = document.querySelector(".suivant");

function enleverActiveImages() {
  for (let i = 0; i < nbrImg; i++) {
    imgSlider[i].classList.remove("active");
  }
}

suivant.addEventListener("click", function () {
  etape++;
  if (etape >= nbrImg) {
    etape = 0;
  }
  enleverActiveImages();
  changeName();
  imgSlider[etape].classList.add("active");
});

precedent.addEventListener("click", function () {
  etape--;
  if (etape < 0) {
    etape = nbrImg - 1;
  }
  enleverActiveImages();
  changeName();
  imgSlider[etape].classList.add("active");
});

// setInterval(function() {
//    etape++;
//    if(etape >= nbrImg) {
//        etape = 0;
//        changeName()
//    }
//    enleverActiveImages();
//    changeName()
//    imgSlider[etape].classList.add('active');
// }, 2000)

function changeName() {
  const newH2 = document.createElement("h2"); //creation du h2
  newH2.textContent = devName[etape]; //creation du contenu
  dev.append(newH2); //insertion du h2
  dev.firstChild.remove();
}
