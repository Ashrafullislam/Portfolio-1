// Typing script javascript

var typed = new Typed(".typing",{
    strings : ["Web Developer","Web Designer","Photographer !","Youtuber !","Bloger !","Webdesigner","Web Developer"
],
    typeSpeed:80,
    backSpeed:80,
    loop:true,
    
})


//Typing 2 section javascript start from here

var typed = new Typed(".typing_2",{
    strings: ["Webdesigner","Web Developer","Photographer","Youtuber","Bloger","Webdesigner","Web Developer"],
    typeSpeed:60,
    backSpeed:70,
    loop:true,
});

// Show /hide paragraph faqs

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');

        // Change icon when click
        const icon = faq.querySelector('.faq-icon i');
        if (icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }

    })
})

// Show /hide paragraph faqs end here

  // show or hide nav menu 

  const menu = document.querySelector('.nav-menu');
  const menuBtn = document.querySelector
  ('#open-menu-btn');
  const closeBtn = document.querySelector
  ('#close-menu-btn');

  menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  })

//   close nav menu 

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.
    toggle('window-scroll', window.scrollY>100);
})