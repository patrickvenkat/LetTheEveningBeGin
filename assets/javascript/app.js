coldWeatherDrinks= ["A.D.M. (After Dinner Mint)", "Cosmopolitan", "Espresso Martini", "Manhattan", "Old Fashioned", "Oatmeal Cookie", "The Jimmy Conway", "A1", "Adam & Eve", "Adios Amigos Cocktail", "Brigadier", "Penicillin"];
mildWeatherDrinks= ["A True Amaretto Sour", "Aviation", "Cherry Electric Lemonade", "Cream Soda", "Dirty Martini", "Gimlet", "The Last Word", "Vesper", "Adios Amigos Cocktail", "Duchamp's Punch", "Flaming Lamborghini", "Gin Rickey"];
hotWeatherDrinks= ["A Gilligan's Island", "Absolut Summertime", "Ace", "Bahama Mama", "Bora Bora", "Lemon Drop", "Miami Vice", "Mojito", "Paloma", "Shark Attack", "Tequila Sunrise", "Greyhound"];

var coldWeatherTemp = 50;
var mildWeatherTemp = 70;

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
    if (response.cod !== 200) {
      alert(response.Error);
    }
    else {
      var cityTemp = Math.round(((response.main.temp - 273.15) * 9/5) + 32);
      $("#city-temp").html("<p> Temperature  :  " + cityTemp + "F</p>");
      $("#city-weather").html("<p> Weather  :  " + response.weather[0].description + "</p>");
      displayDrinks(cityTemp);
    }
  }).fail(function (response) {
    if (response.cod !== 200) {
      alert("Sorry. Incorrect City Name. Try again. Use spaces if needed.");
    }
    else {
      var cityTemp = Math.round(((response.main.temp - 273.15) * 9/5) + 32);
      $("#city-temp").html("<p> Temperature  :  " + cityTemp + "F</p>");
      $("#city-weather").html("<p> Weather  :  " + response.weather[0].description + "</p>");
    }
  })
  ;
}

function displayDrinks(temp){
  if (temp < coldWeatherTemp){
    for (i=0; i<12; i++){
      $("#drink" + i).html(coldWeatherDrinks[i]);
    }
  }else if ((temp >= coldWeatherTemp) && (temp < mildWeatherTemp)){
    for (i=0; i<12; i++){
      $("#drink" + i).html(mildWeatherDrinks[i]);
    }
  } else{
    for (i=0; i<12; i++){
      $("#drink" + i).html(hotWeatherDrinks[i]);
    }
  }   
}
    // Get drink recipe
    
    $("#search").click(function () {
      var drink = $("#drink-name").val();
      $("#drink1").html("");
      getdrink(drink);
    });
    
    function getdrink(temp) {
      // queryURL endpoint for gin API
      drink = "cosmopolitan"
      var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
    
    
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function (response) {
        if (response.Response === "False") {
          alert(response.Error);
        }
        else {
          // $("#drink1").append("<h2> Directions :  " + response.drinks[0].strInstructions + "</h2>");
          // $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient1 + "</h2>");
          // $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient2 + "</h2>");
          // $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient3 + "</h2>");
          // $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient4 + "</h2>");
          // $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient5 + "</h2>");
          // $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient6 + "</h2>");
          // $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient7 + "</h2>");
          // $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient8 + "</h2>");
          // $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient9 + "</h2>");
          // $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient10 + "</h2>");
          // $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient11 + "</h2>");
          // $("#drink1").append("<h2> Ingredient   :  " + response.drinks[0].strIngredient12 + "</h2>");
          // $("#drink1").append("<img src=" + response.drinks[0].strDrinkThumb + ">");
        }
  });
}
