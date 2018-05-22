$('.toggle').on('click', function() {
  $('.menu').toggleClass('open');  
  $('.nav').toggleClass('show-nav');  
  $('.nav a').toggleClass('show-nav-link');  
  $('.container , .toggle').toggleClass('close');  


// function to trigger animation
document.querySelector('.button').addEventListener('click', () => {
  document.querySelector('.menu__list')
    .classList.toggle('menu__list--animate');
});
  
