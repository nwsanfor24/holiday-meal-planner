$(document).ready(function () {

    // Generate Button
    function getDinner() {
        $("#generate").on("click", function () {
            updateDrink();
            updateMeal();
        })
    };
    getDinner();

    // Lock Cocktail - Generate button won't affect this if this is in the lock position
    function lockCocktail() {
        $("#lockCocktail").on("click", function () {
            $("#lockCocktail").toggleClass("fa-unlock fa-lock");
            $(this).off().getDinner();
        });
    };
    lockCocktail();

    // Lock Meal - Generate button won't affect this if this is in the lock position
    function lockMeal() {
        $("#lockMeal").on("click", function () {
            $("#lockMeal").toggleClass("fa-unlock fa-lock");
        });
    };
    lockMeal();
});