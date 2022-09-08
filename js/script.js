// Menu burger
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.header__nav');
const body = document.body; 


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

menu.querySelectorAll('.header__nav-menu-link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('lock');
    });
});



// Owl Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        center: true,
        smartSpeed: 500
    });
});


// Anchor 
const anchor = document.querySelectorAll(".header__nav-menu a");
console.log(anchor);

anchor.forEach(anc => {
    anc.addEventListener("click", function(event){
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop,
            behavior: 'smooth'
        });
    });
});  


