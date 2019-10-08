$('.nav-link').click(function () {
    $("li .nav-link").removeClass("chosen");
    $(this).addClass("chosen");
})

$(window).on('slideChange',function(event, number, element){
    $("li .nav-link").removeClass("chosen");
    document.querySelectorAll('.nav-link')[number-1].classList.toggle('chosen');
});

$('.see-more-button').click(function() {
    $('.modal-wrapper').addClass('flex');
})

$('.close-modal').click(function() {
    $('.modal-wrapper').removeClass('flex');
})

$(window).on('slideChange',function(event, number, element){
    $('.modal-wrapper').removeClass('flex');
});