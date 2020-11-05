$(document).ready(function () {
    $('.slider').slick();
})

$(document).ready(function () {
    $('.direction__slider').slick();
})

// $(document).ready(function () {
//     $('.review__slider').slick();
// })
$('.review__slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
});