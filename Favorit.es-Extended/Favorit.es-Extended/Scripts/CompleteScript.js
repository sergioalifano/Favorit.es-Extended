$('body').on('click', 'div.photo a', function (event) {
    event.preventDefault();
    var photoLink = $(this);
    var url = photoLink.attr('href');
    $.get(url, function (data) {
        photoLink.children('div').addClass("heart");
    });
});

$('body').on('click', 'div.favorite a', function (event) {
    event.preventDefault();
    var photoLink = $(this);
    var url = photoLink.attr('href');
    $.get(url, function (data) {
        photoLink.children('div').removeClass("heart");
    });
});


//for toggling
$('body').on('click', 'div.favorite a, div.photo a', function () {
    event.preventDefault();
    var photoLink = $(this);
    var url = photoLink.attr('href');
    $.get(url, function (data) {
        if (data == 'favorited') {
            photoLink.children('div').addClass("heart");
        } else {
            photoLink.children('div').removeClass("heart");
        }

    });
});