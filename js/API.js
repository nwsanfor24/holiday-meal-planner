

let drinkInfoURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
let mealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

function updateDrink() { 
       
    $.ajax({
        url: drinkInfoURL,
        method: "GET",
     }).then(function(response) {
        $(".cocktail-title").text(response.drinks[0].strDrink);
        $(".cocktail-img").attr("src", response.drinks[0].strDrinkThumb);
        $(".cocktail-description").text(response.drinks[0].strGlass);
        $(".cocktail-steps").text(respopnse.drinks[0].strInstructions);

        let drinkAmounts = [
            response.drinks[0].strMeasure1,
            response.drinks[0].strMeasure2,
            response.drinks[0].strMeasure3,
            response.drinks[0].strMeasure4,
            response.drinks[0].strMeasure5,
            response.drinks[0].strMeasure6,
            response.drinks[0].strMeasure7,
            response.drinks[0].strMeasure8,
            response.drinks[0].strMeasure9,
            response.drinks[0].strMeasure10,
            response.drinks[0].strMeasure11,
            response.drinks[0].strMeasure12,
            response.drinks[0].strMeasure13,
            response.drinks[0].strMeasure14,
            response.drinks[0].strMeasure15,
        ];
        
        let drinkIngredients = [
            response.drinks[0].strIngredient1,
            response.drinks[0].strIngredient2,
            response.drinks[0].strIngredient3,
            response.drinks[0].strIngredient4,
            response.drinks[0].strIngredient5,
            response.drinks[0].strIngredient6,
            response.drinks[0].strIngredient7,
            response.drinks[0].strIngredient8,
            response.drinks[0].strIngredient9,
            response.drinks[0].strIngredient10,
            response.drinks[0].strIngredient11,
            response.drinks[0].strIngredient12,
            response.drinks[0].strIngredient13,
            response.drinks[0].strIngredient14,
            response.drinks[0].strIngredient15,
        ];

        for(i=0; i < drinkIngredients.length; i++) {
            let newDrink = $("<li>").text(`${drinkAmounts[i]} ${drinkIngredients[i]}`);
            $(".cocktail-ingredients").append(newDrink);
        };
    });

   };
