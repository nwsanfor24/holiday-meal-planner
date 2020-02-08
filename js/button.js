$(document).ready(function () {

    function getDrink() {
        $("#generate").on("click", function () {
            updateDrink();
        })
    };
    getDrink();

    var meal = $("#meal-name").val();
    var date = $("#date-picker").val();

    function saveMeal() {
        $("#saveMeal").on("click", function () {
            $("#date").attr(date);
        })
    }
    saveMeal();
});