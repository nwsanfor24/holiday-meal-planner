$(document).ready(function () {

    function getDrink() {
        $("#generate").on("click", function () {
            updateDrink();
            updateMeal();
        })
    };
    getDrink();

    var meal = $("#meal-name").val();
    var date = $("#date-picker").val();

    

    function lockCocktail() {
        $("#lockCocktail").on("click", function () {
            $("#lockCocktail").toggleClass("fa-unlock fa-lock");          
            
        });
    };
    lockCocktail();

    function lockMeal() {
        $("#lockMeal").on("click", function () {
            $("#lockMeal").toggleClass("fa-unlock fa-lock");
        });
    };
    lockMeal();
});