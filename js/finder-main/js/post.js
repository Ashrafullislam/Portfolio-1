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
// post start here
var normalPostInput = document.getElementById('normal-post-input');
var mainPostSec = document.getElementById('main-post-sec');
mainPostSec.style.display = 'none';
normalPostInput.addEventListener('click', function(){
    mainPostSec.style.display = 'block';
    normalPostInput.style.display = 'none';
});
var closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', function(){
    mainPostSec.style.display = 'none';
    normalPostInput.style.display = 'block';
    normalPostInput.style.margin = '2% auto';
});
// post end here