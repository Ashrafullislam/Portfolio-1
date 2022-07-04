// navbar start here
const body = document.querySelector("body");
      const navbar = document.querySelector(".navbar");
      const menuBtn = document.querySelector(".menu-btn");
      const cancelBtn = document.querySelector(".cancel-btn");
      menuBtn.onclick = ()=>{
        navbar.classList.add("show");
        menuBtn.classList.add("hide");
        body.classList.add("disabled");
      }
      cancelBtn.onclick = ()=>{
        body.classList.remove("disabled");
        navbar.classList.remove("show");
        menuBtn.classList.remove("hide");
      }
      window.onscroll = ()=>{
        this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
      }
// navbar end here
// hum start here
var firstIconWrapper = document.querySelector('.first-icon-wrapper');
var secondIconWrapper = document.querySelector('.second-icon-wrapper');
var thirdIconWrapper = document.querySelector('.third-icon-wrapper');
firstIconWrapper.classList.add('icon-none');
secondIconWrapper.classList.add('icon-none');
thirdIconWrapper.addEventListener('click', function(){
    firstIconWrapper.classList.toggle('show-icon');
    secondIconWrapper.classList.toggle('show-icon');
});
// hum end here
// owl carousel start hrere
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });
});
//   owl carousel end here