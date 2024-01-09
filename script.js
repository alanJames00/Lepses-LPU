// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// const swiper = new Swiper(...);

 var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    },
    
        breakpoints: {
          540: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 2,
           
          },
          1024: {
            slidesPerView: 3,
           
          },
        },
   
  });
//   $(document).ready(function(){
//     $('.customer-logos').slick({
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         arrows: false,
//         dots: false,
//         pauseOnHover:false,
//         responsive: [{
//             breakpoint: 768,
//             setting: {
//                 slidesToShow:4
//             }
//         }, {
//             breakpoint: 520,
//             setting: {
//                 slidesToShow: 3
//             }
//         }]
//     });
// });
