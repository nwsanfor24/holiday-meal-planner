$(document).ready(function () {

    // Generate Button
    function getDinner() {
        $("#generate").on("click", function (event) {
            event.preventDefault()
            var ct = $(`.ctbutton`);
            var finddrinklock = ct.find(`.fa-unlock`).length;

            var ml = $(`.mlbutton`);
            var findmeallock = ml.find(`.fa-unlock`).length;
           
            if (finddrinklock === 1 && findmeallock === 1) {
                updateDrink();
                updateMeal();
            } else if (finddrinklock === 1 && findmeallock === 0) {
                updateDrink();
            } else if (finddrinklock === 0 && findmeallock === 1) {
                updateMeal();
            } else if (finddrinklock === 0 && findmeallock === 0) {
                return;
            }
        })
    };
    getDinner();

    // Lock Cocktail - Generate button won't affect this if this is in the lock position
    function lockCocktail() {
        $("#lockCocktail").on("click", function (event) {
            $("#lockCocktail").toggleClass("fa-unlock fa-lock");
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