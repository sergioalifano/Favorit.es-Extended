//$(document).ready(function () {
//    $('body').on('click', '.photo a', function (event) {    //a herf= "@Url.Action("favorite", "home", new { PhotoId = item...})
//        //prevent the default behavior when clicking the photo
//        event.preventDefault();

//        var theATag = $(this);

//        //get the href attribute
//        var theATagsHREF = theATag.attr('href');

//        //make the AJAX request $.get(URL, function(text response){..}) using jQuery
//        $.get(theATagsHREF, function (data) {
//            if (data == "OK") {
//                theATag.children('div').addClass('heart');
//            }
//        });
//    });

//    $('body').on('click', '.favorite a', function (event) {
//        event.preventDefault();

//        var theATag = $(this);
//        var theATagsHREF = theATag.attr('href');

//        $.get(theATagsHREF, function (data) {
//            if (data == "OK") {
//                theATag.children('div').removeClass('heart');
//            }
//        });
//    });
//});


$(document).ready(function () {
    $('body').on('click','.photo a, .favorite a',function(event){
    event.preventDefault();

    var theATag = $(this);
    $.get(theATag.attr('href'), function (data) {
        theATag.children('div').toggleClass('heart');
        //if(data=="favorited"){
        //    theATag.children('div').addClass('heart');
        //}
        //else{
        //    theATag.children('div').removeClass('heart');
        //}
         });

    });
});