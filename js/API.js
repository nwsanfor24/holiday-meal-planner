$(document).ready(function() {

    let drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php?a=Alcoholic";
    let mealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

    
    $.ajax({
        url: drinkURL,
        method: "GET",
    }).then(function(updateDrink) {
        $(".cocktail-title").text(updateDrink.drinks[0].strDrink);
        $(".cocktail-img").attr("src", updateDrink.drinks[0].strDrinkThumb);
        $(".cocktail-description").text(updateDrink.drinks[0].strGlass);
        $(".cocktail-steps").text(updateDrink.drinks[0].strInstructions);
        
        let drinkIngredients = [
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
        ]

        for(i=1; i < drinkIngredients.length; i++) {
            let newIngredient = $("<li>").text(drinkIngredients[i]);
            $(".cocktail-ingredients").append(newIngredient);
        };
    });
});
