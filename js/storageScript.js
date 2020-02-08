$(document).ready(function() {
    
    //Meal variables
    let mealName;
    let mealInstruct;
    let mealIngredientList = [];

    //Drink variables
    let drinkName;
    let drinkInstruct;
    let drinkIngredientList = [];

    //Event Handler for "Save" button
    $("#saveMeal").on("click", function(event) {
        event.preventDefault();
        //Get values from entered fields (Event Name and Date)
        let eventName = $("#meal-name").val();
            console.log(`Event Name: ${eventName}`);
        let eventDate = $("#date-picker").val();
            console.log(`Event Date: ${eventDate}`);

        //Getting Drink Name + Instructions from API
        drinkName = $(".cocktail-title").text();
            console.log(`Drink Name: ${drinkName}`);
        drinkInstruct = $(".cocktail-steps").text();
            console.log(`Drink Instructions: ${drinkInstruct}`);
        //drinkIngredientList = $(".cocktails-ingredients");
            //console.log(`Drink Ingredients: ${drinkIngredientList}`);
    });
});

/*
        let mealStorageObj = {
            "name" : 
            "ingredients" : 
            "instructions" :
        };
        localStorage.setItem("testMeal", JSON.stringify(mealStorageObj));
        let drinkStorageObj = {
            "name" : 
            "ingredients" : 
            "instructions" : 
        };
        localStorage.setItem("testDrink", JSON.stringify(drinkStorageObj));
    }); 
    
    //MEAL - Get information from local storage
    
    $(".btn-success").on("click", function() {
        //WILL NEED TO CHANGE THE NAME OF LOCAL STORAGE ITEMS

        let storedMeal = JSON.parse(localStorage.getItem("testMeal"));
        let storedMealName = storedMeal.name;
        let storedMealIngredients = storedMeal.ingredients;
        let storedMealInstruct = storedMeal.instructions;

        let storedDrink = JSON.parse(localStorage.getItem("testDrink"));
        let storedDrinkName = storedDrink.name;
        let storedDrinkIngredList = storedDrink.ingredients;
        let storedDrinkInstruct = storedDrink.instructions;

        $(".mealName").text(storedMealName);
        $(".mealIngredients").text(storedMealIngredients);
        $(".mealInstructions").text(storedMealInstruct);
        $(".drinkName").text(storedDrinkName);
        $(".drinkIngredients").text(storedDrinkIngredList);
        $(".drinkInstructions").text(storedDrinkInstruct);
    
    });
});
*/