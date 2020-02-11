
//Declaring the two API URLs
let drinkInfoURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
let mealInfoURL = "https://www.themealdb.com/api/json/v1/1/random.php";

function updateDrink() { 
    
    //JQuery call to empty the previous card info on button push
    $(".cocktail-ingredients").empty();

    $.ajax({
        url: drinkInfoURL,
        method: "GET",
    //Initial response sets some cocktail box information
    }).then(function (response) {
        $(".cocktail-title").text(response.drinks[0].strDrink);
        $(".cocktail-img").attr("src", response.drinks[0].strDrinkThumb);
        $(".cocktail-description").text(response.drinks[0].strGlass);
        $(".cocktail-steps").text(response.drinks[0].strInstructions);

        if (response.drinks[0].strAlcoholic !== "Alcoholic") {
            updateDrink()
        };

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
            if (drinkAmounts[i] === null && drinkIngredients[i] !== null) {
                let newDrink = $("<li>").text(`${postedDrinkIngredients}`);
                $(".cocktail-ingredients").append(newDrink);
                }
            else if (drinkIngredients[i] !== null && 
                    drinkIngredients[i] !== "") {
                $(".cocktail-ingredients").append(newDrink);
                }
            };
        });
    };


//Function to compile button click functionality for the meal field
function updateMeal() { 
       
    //JQuery call to empty the previous card info on button push
    $(".meal-ingredients").empty();

    //Cocktal API call
    $.ajax({
        url: mealInfoURL,
        method: "GET",
    //Initial response sets some meal box information
    }).then(function (response) {
        $(".meal-title").text(response.meals[0].strMeal);
        $(".meal-img").attr("src", response.meals[0].strMealThumb);
        $(".meal-description").text((response.meals[0].strArea) + " " + (response.meals[0].strCategory));
        $(".meal-steps").text(response.meals[0].strInstructions);

        //Pulling measurement amounts for meal ingredients from API
        let mealAmounts = [
            response.meals[0].strMeasure1,
            response.meals[0].strMeasure2,
            response.meals[0].strMeasure3,
            response.meals[0].strMeasure4,
            response.meals[0].strMeasure5,
            response.meals[0].strMeasure6,
            response.meals[0].strMeasure7,
            response.meals[0].strMeasure8,
            response.meals[0].strMeasure9,
            response.meals[0].strMeasure10,
            response.meals[0].strMeasure11,
            response.meals[0].strMeasure12,
            response.meals[0].strMeasure13,
            response.meals[0].strMeasure14,
            response.meals[0].strMeasure15,
            response.meals[0].strMeasure16,
            response.meals[0].strMeasure17,
            response.meals[0].strMeasure18,
            response.meals[0].strMeasure19,
            response.meals[0].strMeasure20,
        ];

        //Pulling meal ingredients from API
        let mealIngredients = [
            response.meals[0].strIngredient1,
            response.meals[0].strIngredient2,
            response.meals[0].strIngredient3,
            response.meals[0].strIngredient4,
            response.meals[0].strIngredient5,
            response.meals[0].strIngredient6,
            response.meals[0].strIngredient7,
            response.meals[0].strIngredient8,
            response.meals[0].strIngredient9,
            response.meals[0].strIngredient10,
            response.meals[0].strIngredient11,
            response.meals[0].strIngredient12,
            response.meals[0].strIngredient13,
            response.meals[0].strIngredient14,
            response.meals[0].strIngredient15,
            response.meals[0].strIngredient16,
            response.meals[0].strIngredient17,
            response.meals[0].strIngredient18,
            response.meals[0].strIngredient19,
            response.meals[0].strIngredient20,
        ];

        //Loop set up to post ingredients and amounts to the page
        for (i = 0; i < mealIngredients.length; i++) {
            let postedMealAmounts = mealAmounts[i];
            let postedMealIngredients = mealIngredients[i];
            let newMeal = $("<li>").text(`${postedMealAmounts} ${postedMealIngredients}`);

            //funtcion to filter out empty ingredient and amount fields
            if (mealAmounts[i] === "" && mealIngredients[i] == true) {
                let newMeal = $("<li>").text(`${postedMealIngredients}`);
                $(".meal-ingredients").append(newMeal);
                }
            else if (mealIngredients[i] !== "" && 
                    mealIngredients[i] !== null) {
                $(".meal-ingredients").append(newMeal);
                }
            };
        });
    };