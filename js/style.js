const removeBack =document.querySelectorAll(".right .page .fli a")

removeBack.forEach(ele => {
  
  ele.addEventListener("click", (e) => {

    handActive(e)
    
  })
  
});

function handActive(eve) {
  eve.preventDefault();
  
  // Remove Active Class From All Childrens
  eve.target.parentElement.querySelectorAll(".act").forEach(element => {
    
    element.classList.remove("act");
    
    });
    
    // Add Active Class On Self
    eve.target.classList.add("act");
    
};

// Start Scroll

let bt = document.querySelector(".scroll");

window.onscroll = function () {
    if (window.scrollY >= 200) {
        bt.style.display = "block"
    } else {
        bt.style.display = "none"
    }
}

bt.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let butOne = document.querySelector(".right .radios #one");
let butTwo = document.querySelector(".right .radios #two");
let butThree = document.querySelector(".right .radios #three");
let flyOne = document.querySelector(".right .fly")
let flyTwo = document.querySelector(".right .fly-2")
let flyThree = document.querySelector(".right .fly-3")
let flyFour = document.querySelector(".right .fly-4")


butOne.onclick = function () {
  flyTwo.style.display = "none"
  flyFour.style.display = "none"
  flyThree.style.display = "none"
  flyOne.style.display = "block"
}
butTwo.onclick = function () {
  flyFour.style.display = "none"
  flyTwo.style.display = "block"
  flyOne.style.display = "none"
  flyThree.style.display = "none"
}
butThree.onclick = function () {
  flyThree.style.display = "block"
  flyFour.style.display = "block"
  flyTwo.style.display = "none"
  flyOne.style.display = "none"
};

let linkOne = document.querySelector(".right .page .fli .one")
let linkTwo = document.querySelector(".right .page .fli .two")
let linkThree = document.querySelector(".right .page .fli .three")
let pageOne = document.querySelector(".right .all-one")
let pageTwo = document.querySelector(".right .all-two")
let pageThree = document.querySelector(".right .all-three")

linkOne.onclick = function () {
  pageOne.style.display = "block"
  pageTwo.style.display = "none"
  pageThree.style.display = "none"
}
linkTwo.onclick = function () {
  pageOne.style.display = "none"
  pageTwo.style.display = "block"
  pageThree.style.display = "none"
}
linkThree.onclick = function () {
  pageOne.style.display = "none"
  pageTwo.style.display = "none"
  pageThree.style.display = "block"
};

let hotOne = document.querySelector(".right .all-three .radios #t3o")
let hotTwo = document.querySelector(".right .all-three .radios #thr33")
let hotThree = document.querySelector(".right .all-three .hotfly")
let hotfour = document.querySelector(".right .all-three .hotfly2")

hotOne.onclick = function () {
  hotThree.style.display = "block";
  hotfour.style.display = "none";
}
hotTwo.onclick = function () {
  hotThree.style.display = "none";
  hotfour.style.display = "block";
}
