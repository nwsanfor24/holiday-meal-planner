$(document).ready(function() {

    //Local storage variables
    let storedEvents = [];
    let savedTable = $(".savedTable");

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

    //Populating Saved Table with events in local storage
    function generateTable() {
        for (let i = 0; i < storedEvents.length; i++) {
          let tr = savedTable.append($("<tr>"));
          let viewBtn = `<button type="button" data-index="${i}" class="btn-large mycolor viewBtn">View</button>`;
          tr.append($("<td>").text(storedEvents[i].eventName));
          tr.append($("<td>").text(storedEvents[i].eventDate));
          tr.append($("<td>").text(storedEvents[i].mealName));
          tr.append($("<td>").text(storedEvents[i].drinkName));
          tr.append($("<td>").html(viewBtn));
        };
      };

    generateTable();

    $(".btn-clear").on("click", function() {
        $(".savedTable").empty();
        localStorage.clear();
        storedEvents = [];
    });

    //Event Handler for "Save" button
    $("#saveMeal").on("click", function(event) {
        event.preventDefault();
        //Get values from entered fields (Event Name and Date)
        let eventName = $("#meal-name").val().trim();
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

        //Created the object that will be saved to local storage
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

    // this is Jen's function... will need to merge with Oliva

    let dataIndex;

    let elem2 = document.querySelector('#mealmodal'); // Modal variable
    let instance2 = M.Modal.init(elem2); // Modal variable

    function viewMeal() {
        let mealList = $(`.mealIngredients`);
        let drinkList = $(`.drinkIngredients`);
        mealList.empty();
        drinkList.empty();

        
        $(`.eventName`).text(storedEvents[dataIndex].eventName);
        $(`.eventDate`).text(storedEvents[dataIndex].eventDate);
        $(`.mealName`).text(storedEvents[dataIndex].mealName);
        $(`.drinkName`).text(storedEvents[dataIndex].drinkName);
        $(`.mealInstructions`).text(storedEvents[dataIndex].mealInstructions);
        $(`.drinkInstructions`).text(storedEvents[dataIndex].drinkInstructions);

        for (i = 0; i < storedEvents[dataIndex].mealIngredients.length; i++) {
            mealList.append($(`<li>`).text(storedEvents[dataIndex].mealIngredients[i]));
            }
        
        for (i = 0; i < storedEvents[dataIndex].drinkIngredients.length; i++) {
            drinkList.append($(`<li>`).text(storedEvents[dataIndex].drinkIngredients[i]));
            }
    }

    $(".viewBtn").on("click", function() {
        dataIndex = $(this).attr("data-index");
        viewMeal();
        instance2.open();
    });
})
