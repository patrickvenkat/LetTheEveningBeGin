$("#search").click(function() {
    var drink = $("#drink-name").val();
    $("#drink1").html("");
    getdrink(drink);
  });
 
  function getdrink(drink) {
    // queryURL endpoint for gin API
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
 
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      if (response.Response === "False") {
        alert(response.Error);
      }
      else {
          $("#drink1").append("<h2> Directions :  " + response.drinks[0].strInstructions + "</h2>");
            $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient1 + "</h2>");
            $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient2 + "</h2>");
            $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient3 + "</h2>");
            $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient4 + "</h2>");
            $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient5 + "</h2>");
            $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient6 + "</h2>");
            $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient7 + "</h2>");
            $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient8 + "</h2>");
            $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient9 + "</h2>");
            $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient10 + "</h2>");
            $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient11 + "</h2>");
            $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient12 + "</h2>");
            $("#drink1").append("<img src=" + response.drinks[0].strDrinkThumb + ">");
 
        // }
      }
  });
 }