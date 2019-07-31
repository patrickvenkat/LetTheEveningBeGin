$("#city-search").click(function () {
  var city = $("#city-name").val();
  $("#city-weather").html("");
  getCityWeather(city);
});

function getCityWeather(city) {
  // queryURL endpoint for gin API
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?APIkey=77beb286ab5ffea55b1e6542f41987d9&q=" + city;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {
    if (response.Response === "False") {
      alert(response.Error);
    }
    else {
      var cityTemp = Math.round(((response.main.temp - 273.15) * 9/5) + 32);
      $("#city-weather").append("<h2> Temperature  :  " + cityTemp + "</h2>");
      $("#city-weather").append("<h2> Temperature  :  " + response.weather[0].description + "</h2>");
    }
  });
}

    // Get drink recipe
    
    $("#search").click(function () {
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
      }).done(function (response) {
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
        }
    


    // var city = "Boston";
    // var queryURL = "http://api.openweathermap.org/data/2.5/weather?APIkey=77beb286ab5ffea55b1e6542f41987d9&q=" + city;

    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).done(function (response) {
    //   if (response.Response === "False") {
    //     alert(response.Error);
    //   }
    //   else {
    //     $("#drink1").append("<h2> Temperature  :  " + response.main.temp + "</h2>");
    //   }
    // })


    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).done(function (response) {
    //   if (response.Response === "False") {
    //     alert(response.Error);
    //   }
    //   else {
    //     $("#drink1").append("<h2> Weather Description  :  " + response.weather[0].description + "</h2>");
    //   }
    // })

  });
}
