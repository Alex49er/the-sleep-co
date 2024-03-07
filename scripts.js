$(document).ready(function(){

$(".hamburger-menu").click(function(){
    $(this).toggleClass('active');
    $('.mobile-menu').fadeToggle();
});

// animate on scroll animation
AOS.init({
    duration: 400
});

});