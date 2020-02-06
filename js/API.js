$(document).ready(function() {

    let drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php?a=Alcoholic";
    let mealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

    $.ajax({
        url: drinkURL,
        method: "GET",
    }).then(function(updateDrink) {
        $(".cocktail-title").text(updateDrink.drinks[strDrink]);
        $(".cocktail-img").attr("src", updateDrink.drinks[strDrinkThumb]);
    });








});
