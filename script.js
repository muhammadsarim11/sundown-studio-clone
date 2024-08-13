const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


let a = document.getElementById("elem1")
let pictures = document.querySelector(".fixed-image")

let container = document.querySelector(".elem-container")

container.addEventListener('mouseover',function(){
pictures.style.display = "block"

})
container.addEventListener('mouseleave',function(){
    pictures.style.display = "none"
    
    })


   let elems = document.querySelectorAll(".elem")
   elems.forEach(function (e) {
    e.addEventListener("mouseenter",()=>{
        let image = e.getAttribute("data-image")
        pictures.style.backgroundImage = `url(${image})`
    })
    
   })

   var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var flag = 0;

  var imgNav = document.querySelector("nav img")
var menu = document.querySelector("nav h3")
var fullScreen = document.querySelector(".full-scr")
menu.addEventListener('click',()=>{
  if(flag == 0){
    fullScreen.style.top = 0
    imgNav.style.opacity = 0
    flag = 1;
}
 else{
    fullScreen.style.top = "-100%";
    imgNav.style.opacity = 1;
    flag = 0;
}

})


var loader = document.querySelector(".loader");


setTimeout(()=>{
loader.style.top = "-100%"
}
,4000)