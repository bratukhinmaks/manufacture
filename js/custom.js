$('.nav-link').click(function () {
    $("li .nav-link").removeClass("chosen");
    $(this).addClass("chosen");
})

$(window).on('slideChange',function(event, number, element){
    $("li .nav-link").removeClass("chosen");
    document.querySelectorAll('.nav-link')[number-1].classList.toggle('chosen');
});
