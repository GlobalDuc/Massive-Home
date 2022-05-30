$(document).ready(function () {
    $('.navbar ul li a').click(function () {
        var type = $(this).attr('data-type');
        // console.log(type);
        var name__properties = $(this).text();
        $('.nav__title').text(name__properties);
        type = '.' + type;
        $('.portfolio').isotope({
            filter: type
        });
    });
});

$(document).ready(function () {
    $('.navbar ul li a').click(function () {
        var type = $(this).attr('data-type');
        // console.log(type);
        type = '.' + type;
        $('.content').isotope({
            filter: type
        });

    });
});


$(".nav .nav-item").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
});



