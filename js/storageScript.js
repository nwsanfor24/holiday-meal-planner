$(document).ready(function() {

    //Local storage variables
    let storedEvents = [];
    
    //Meal variables
    let mealName;
    let mealInstruct;
    let mealIngredientList = [];

    //Drink variables
    let drinkName;
    let drinkInstruct;
    let drinkIngredientList = [];

    //Getting events that have already been saved to local storage
    if (localStorage.getItem("savedEvents") !== null) {
        storedEvents = JSON.parse(localStorage.getItem("savedEvents"));
    }

    //Event Handler for "Save" button
    $("#saveMeal").on("click", function(event) {
        event.preventDefault();
        //Get values from entered fields (Event Name and Date)
        let eventName = $("#meal-name").val();
        let eventDate = $("#date-picker").val();

        //Meal & Drink Names, Instructions, and Ingredients
        mealName = $(".meal-title").text();
        mealInstruct = $(".meal-steps").text();
        let mealIngredientDiv = document.querySelector(".meal-ingredients").children;
        for (i=0; i<mealIngredientDiv.length; i++) {
            mealIngredientList.push(mealIngredientDiv[i].innerText);
        };    
        drinkName = $(".cocktail-title").text();
        drinkInstruct = $(".cocktail-steps").text();
        let drinkIngredientDiv = document.querySelector(".cocktail-ingredients").children;
        for (i=0; i<drinkIngredientDiv.length; i++) {
            drinkIngredientList.push(drinkIngredientDiv[i].innerText);
        };    

        let eventStorageObj = {
            "eventName" : eventName,
            "eventDate" : eventDate,
            "mealName" : mealName, 
            "mealIngredients" : mealIngredientList, 
            "mealInstructions" : mealInstruct, 
            "drinkName" : drinkName,
            "drinkIngredients" : drinkIngredientList,
            "drinkInstructions" : drinkInstruct
        };
        storedEvents.push(eventStorageObj);
        localStorage.setItem("savedEvents", JSON.stringify(storedEvents));
    }); 
})
