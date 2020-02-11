$(document).ready(function () {

    // Generate Button
    function getDinner() {
        $("#generate").on("click", function (event) {
            event.preventDefault()
            var ct = $(`.ctbutton`);
            var finddrinklock = ct.find(`.fa-unlock`).length;
            console.log(finddrinklock);

            var ml = $(`.mlbutton`);
            var findmeallock = ml.find(`.fa-unlock`).length;
            console.log(findmeallock);
           
            if (finddrinklock === 1 && findmeallock === 1) {
                updateDrink();
                updateMeal();
                console.log('both unlocked');
            } else if (finddrinklock === 1 && findmeallock === 0) {
                updateDrink();
                console.log('drink unlocked');
            } else if (finddrinklock === 0 && findmeallock === 1) {
                updateMeal();
                console.log('meal unlocked');
            } else if (finddrinklock === 0 && findmeallock === 0) {
                console.log('none unlocked');
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