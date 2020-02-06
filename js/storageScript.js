$(document).ready(function() {

    let randomMealQuery = "https://www.themealdb.com/api/json/v1/1/random.php";
    let randomDrinkQuery = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    
    //Meal and Drink variables
    
    let mealName;
    let mealInstruct;
    let mealIngredList;
    let drinkName;
    let drinkInstruct;
    let drinkIngredList;
    
    //Get values from entered fields (Event Name and Date)
    let eventName = $(".classname").val();
    let eventDate = $(".classname").val();
    
    //Test meal API
    $.ajax({
        url: randomMealQuery,
        method: "GET"
    }).then(function(response) {
        mealName = response.meals[0].strMeal;
        mealInstruct = response.meals[0].strInstructions;
        mealIngredList = [
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

        console.log(`Meal Name: ${mealName}`);
        console.log(`Meal Ingredients: ${mealIngredList}`);
        console.log(`Meal Instructions: ${mealInstruct}`);
    });
    
    //Test drink API
    $.ajax({
        url: randomDrinkQuery,
        method: "GET"
    }).then(function(response) {
        drinkName = response.drinks[0].strDrink;
        drinkInstruct = response.drinks[0].strInstructions;
        drinkIngredList = [
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
            response.drinks[0].strIngredient16,
            response.drinks[0].strIngredient17,
            response.drinks[0].strIngredient18,
            response.drinks[0].strIngredient19,
            response.drinks[0].strIngredient20,
        ];
        console.log(`Drink Name: ${drinkName}`);
        console.log(`Drink Ingredients: ${drinkIngredList}`);
        console.log(`Drink Instructions: ${drinkInstruct}`);
    });
    
    //MEAL - Event handler to set Local Storage
    
    $(".btn-primary").on("click", function() {
        let mealStorageObj = {
            "name" : mealName,
            "ingredients" : mealIngredList,
            "instructions" : mealInstruct
        };
        console.log(mealStorageObj);
        localStorage.setItem("testMeal", JSON.stringify(mealStorageObj));
        let drinkStorageObj = {
            "name" : drinkName,
            "ingredients" : drinkIngredList,
            "instructions" : drinkInstruct
        };
        console.log(drinkStorageObj);
        localStorage.setItem("testDrink", JSON.stringify(drinkStorageObj));
    });
    
    //MEAL - Get information from local storage
    
    $(".btn-success").on("click", function() {
        //WILL NEED TO CHANGE THE NAME OF LOCAL STORAGE ITEMS

        let storedMeal = JSON.parse(localStorage.getItem("testMeal"));
        let storedMealName = storedMeal.name;
        let storedMealIngredList = storedMeal.ingredients;
        let storedMealInstruct = storedMeal.instructions;
            console.log(`Stored Meal Name: ${storedMealName}`);
            console.log(`Stored Meal Ingredients: ${storedMealIngredList}`);
            console.log(`Stored Meal Instructions: ${storedMealInstruct}`);

        let storedDrink = JSON.parse(localStorage.getItem("testDrink"));
        let storedDrinkName = storedDrink.name;
        let storedDrinkIngredList = storedDrink.ingredients;
        let storedDrinkInstruct = storedDrink.instructions;
            console.log(`Stored Drink Name: ${storedDrinkName}`);
            console.log(`Stored Drink Ingredients: ${storedDrinkIngredList}`);
            console.log(`Stored Drink Instructions: ${storedDrinkInstruct}`);
    
        $(".mealName").text(storedMealName);
        $(".mealIngredients").text(storedMealIngredList);
        $(".mealInstructions").text(storedMealInstruct);
        $(".drinkName").text(storedDrinkName);
        $(".drinkIngredients").text(storedDrinkIngredList);
        $(".drinkInstructions").text(storedDrinkInstruct);
    
    });
    
    })
