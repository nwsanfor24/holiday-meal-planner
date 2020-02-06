$(document).ready(function() {

let randomMealQuery = "https://www.themealdb.com/api/json/v1/1/random.php";
let randomDrinkQuery = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

//Meal and Drink variables

let mealName;
let mealImg;
let mealSite;
let drinkName;
let drinkImg;

//Get values from entered fields (Event Name and Date)
let eventName = $(".classname").val();
let eventDate = $(".classname").val();

//Test meal API
$.ajax({
    url: randomMealQuery,
    method: "GET"
}).then(function(response) {
    mealName = response.meals[0].strMeal;
    mealImg = response.meals[0].strMealThumb;
    mealSite = response.meals[0].strSource;

});

//Test drink API
$.ajax({
    url: randomDrinkQuery,
    method: "GET"
}).then(function(response) {
    drinkName = response.drinks[0].strDrink;
    drinkImg = response.drinks[0].strDrinkThumb;
});

//MEAL - Event handler to set Local Storage

$(".btn-primary").on("click", function() {
    let mealStorageObj = {
        "name" : mealName,
        "image" : mealImg,
        "website" : mealSite
    };
    localStorage.setItem("testMeal", JSON.stringify(mealStorageObj));
});

//MEAL - Get information from local storage

$(".btn-success").on("click", function() {
    //WILL NEED TO CHANGE THE NAME OF THIS LOCAL STORAGE ITEM
    let storedMeal = JSON.parse(localStorage.getItem("testMeal"));
    let storedName = storedMeal.name;
    let storedImg = storedMeal.image;
    let storedSite = storedMeal.website;

    $(".name").text(storedName);
    $(".imgSrc").text(storedImg);
    $(".site").text(storedSite);

});




})