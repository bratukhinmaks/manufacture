$('.nav-link').click(function () {
    $("li .nav-link").removeClass("active");
    $(this).addClass("active");
})

$(window).on('slideChange',function(event, number, element){
    $("li .nav-link").removeClass("active");
    document.querySelectorAll('.nav-link')[number-1].classList.toggle('active');
});
