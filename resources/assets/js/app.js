$(document).ready(function() {
    $('.container').find('*').removeClass('intro');

    $('.container').find('*').not('.contact-links').each(function(i) {
        var el = $(this);
        setTimeout(function() {
            el.addClass('intro');
        }, 600 * i);
    })

    $('.links-container a').on('click', function() {
        $.get('events/click', function(data) {
            console.log(data);
        });
    });

    setTimeout(function () {
        $('.container').find('.contact-links').addClass('intro');
    }, 1000);
    //setTimeout(function () {
    //    $('.container').find('.line').addClass('drawn');
    //}, 1600);
});
