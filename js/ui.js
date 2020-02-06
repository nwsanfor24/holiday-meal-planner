// -------------------------------------------------------------------------------------
// This JavaScript controls the User Interface components
// -------------------------------------------------------------------------------------

$(document).ready(function () {

    let $card = $(`.card`);
    let $window = $(window);

    $window.resize(function resize(){
        if($(window).width() < 800) {
            $(`.card`).removeClass('horizontal');
        }
        else {
            $(`.card`).addClass(`horizontal`);
        }
    });
    
});
