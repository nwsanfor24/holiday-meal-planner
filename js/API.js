
//Declaring the two API URLs
let drinkInfoURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
let mealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

//Function to wrap button click functionality for the cocktail field
function updateDrink() { 
       
    //Cocktal API call
    $.ajax({
        url: drinkInfoURL,
        method: "GET",
    //Initial response sets some cocktail box information
    }).then(function (response) {
        $(".cocktail-title").text(response.drinks[0].strDrink);
        $(".cocktail-img").attr("src", response.drinks[0].strDrinkThumb);
        $(".cocktail-description").text(response.drinks[0].strGlass);
        $(".cocktail-steps").text(response.drinks[0].strInstructions);

        //Pulling measurement amounts for cocktail ingredients from API
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

        //Pulling cocktail ingredients from API
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

        //Loop set up to post ingredients and amounts to the page
        for (i = 0; i < drinkIngredients.length; i++) {
            let postedDrinkAmounts = drinkAmounts[i];
            let postedDrinkIngredients = drinkIngredients[i];
            let newDrink = $("<li>").text(`${postedDrinkAmounts} ${postedDrinkIngredients}`);
            
            //funtcion to filter out empty ingredient and amount fields
            if (drinkAmounts[i] !== null) {
                let newDrink = $("<li>").text(`${postedDrinkIngredients}`);
                $(".cocktail-ingredients").append(newDrink);
                }
            if (drinkIngredients[i] !== null) {
                $(".cocktail-ingredients").append(newDrink);
                }
            };

    });
};

