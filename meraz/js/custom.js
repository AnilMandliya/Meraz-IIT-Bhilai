
(function($) {

    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('open');
        $('.site-navigation').toggleClass('show');
    });

    var countdown_date = $('.countdown').data("date");

    $('.countdown').countdown(countdown_date, function(event) {
        $('.dday').html(event.strftime('%-D'));
        $('.dhour').html(event.strftime('%-H'));
        $('.dmin').html(event.strftime('%-M'));
        $('.dsec').html(event.strftime('%-S'));
    });

    // Counter
    $(".start-counter").each(function () {
        var counter = $(this);

        counter.countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });
    });

})(jQuery);