// -------------------------------------------------------------------------------------
// This JavaScript controls the User Interface components
// -------------------------------------------------------------------------------------

$(document).ready(function () {

    // -------------------------------------------------------------------------------------
    // Adjusting cocktail and meal card layouts depending on screen size
    // -------------------------------------------------------------------------------------

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

    // -------------------------------------------------------------------------------------
    // Popping up modal on save
    // -------------------------------------------------------------------------------------

    let elem = document.querySelector('#savemodal'); // Modal variable
    let instance = M.Modal.init(elem); // Modal variable

    $("#saveMeal").on("click", function() {
        instance.open();
    });

    $(".generate").on("click", function() {
        instance.close();
        $("#meal-name").val("");
        $("#date-picker").val("");
        $(`i`).removeClass(`fa-lock`);
        $(`i`).addClass(`fa-unlock`);
        updateDrink();
        updateMeal();
    });

    updateDrink();
    updateMeal();
});
