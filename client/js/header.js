Template.JobBoard.onRendered(function() {
    // ------------------------
    //chaing to a video source instead
    // ------------------------
    var images = [ '../images/header-img4.png', '../images/header-img3.png', '../images/header-img2.png','../images/beach-header.png'];
    var index = 0;
    var $header = $('.header');
    // setInterval(function() {
    //     $header.animate({left: 1000}, 500, function() {
    //         $header.css('background-image', 'url('+images[++index]+')');
    //         $header.animate({left: 0}, 500, function() {
    //             if(index === images.length) index = 0;
    //         });
    //     });
    // }, 10000);
});
