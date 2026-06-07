window.addEventListener('scroll', function(){

const header = document.querySelector('header');

if(window.scrollY > 50){
header.style.boxShadow =
'0 5px 20px rgba(0,0,0,.15)';
}else{
header.style.boxShadow =
'0 2px 10px rgba(0,0,0,.1)';
}

});

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href'))
.scrollIntoView({
behavior:'smooth'
});

});

});

const posCards = document.querySelectorAll('.pos-card');

posCards.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });

});

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function autoSlider(){

    slides[currentSlide]
    .classList.remove('active');

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide]
    .classList.add('active');

}

setInterval(autoSlider, 5000);

// =======================
// LIGHTBOX GALLERY
// =======================

const galleryImages =
document.querySelectorAll('.gallery-img');

const lightbox =
document.querySelector('.lightbox');

const lightboxImg =
document.querySelector('.lightbox-img');

const closeBtn =
document.querySelector('.close-btn');

galleryImages.forEach(img => {

    img.addEventListener('click', () => {

        lightbox.classList.add('active');

        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener('click', () => {

    lightbox.classList.remove('active');

});

lightbox.addEventListener('click', (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove('active');

    }

});

// =======================
// COUNTER STATISTIK
// =======================

const counters =
document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute('data-target');

        const count =
        +counter.innerText;

        const speed = target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + speed);

            setTimeout(updateCounter, 20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

const menuToggle =
document.querySelector('.menu-toggle');

const navMenu =
document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {

    navMenu.classList.toggle('active');

});

const navLinks =
document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        navMenu.classList.remove('active');

    });

});

window.addEventListener('scroll', () => {

    const header =
    document.querySelector('header');

    if(window.scrollY > 50){

        header.classList.add('scrolled');

    }else{

        header.classList.remove('scrolled');

    }

});