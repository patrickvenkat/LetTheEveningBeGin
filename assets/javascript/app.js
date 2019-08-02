//objects 
coldWeatherDrinks = ["A.D.M. (After Dinner Mint)", "Cosmopolitan", "Espresso Martini", "Manhattan", "Old Fashioned", "Oatmeal Cookie", "The Jimmy Conway", "A1", "Adam & Eve", "Adios Amigos Cocktail", "Brigadier", "Penicillin"];
mildWeatherDrinks = ["A True Amaretto Sour", "Aviation", "Cherry Electric Lemonade", "Cream Soda", "Dirty Martini", "Gimlet", "The Last Word", "Vesper", "Adios Amigos Cocktail", "Duchamp's Punch", "Flaming Lamborghini", "Gin Rickey"];
hotWeatherDrinks = ["A Gilligan's Island", "Absolut Summertime", "Ace", "Bahama Mama", "Bora Bora", "Lemon Drop", "Miami Vice", "Mojito", "Paloma", "Shark Attack", "Tequila Sunrise", "Greyhound"];

//global variables
var coldWeatherTemp = 50;
var mildWeatherTemp = 70;

//click function for city search
$("#city-search").click(function () {
  var city = $("#city-name").val();
  $("#city-weather").html("");
  getCityWeather(city);
});

//function to get city's weather
function getCityWeather(city) {
  // queryURL endpoint for gin API
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?APIkey=77beb286ab5ffea55b1e6542f41987d9&q=" + city;

  //ajax call inside the weather function to get the temperature and conditions
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {
    if (response.cod !== 200) {
      alert(response.Error);
    }
    else {
      //converting our Kelvins to Farenheit
      var cityTemp = Math.round(((response.main.temp - 273.15) * 9 / 5) + 32);
      $("#city-temp").html("<p> Temperature  :  " + cityTemp + "F</p>");
      $("#city-weather").html("<p> Weather  :  " + response.weather[0].description + "</p>");
      displayDrinks(cityTemp);
    }
    //error handling 
  }).fail(function (response) {
    if (response.cod !== 200) {
      alert("Sorry. Incorrect City Name. Try again. Use spaces if needed.");
    }
    else {
      //displaying temperature in our p element of HTML
      var cityTemp = Math.round(((response.main.temp - 273.15) * 9 / 5) + 32);
      $("#city-temp").html("<p> Temperature  :  " + cityTemp + "F</p>");
      $("#city-weather").html("<p> Weather  :  " + response.weather[0].description + "</p>");
    }
  })
    ;
}

//function to display drinks based on temperature received above
function displayDrinks(temp) {
  //for weather under 50
  if (temp < coldWeatherTemp) {
    for (i = 0; i < coldWeatherDrinks.length; i++) {
      $("#drink" + i).html(coldWeatherDrinks[i]);
    }
    //for weather between 50 and 70
  } else if ((temp >= coldWeatherTemp) && (temp <= mildWeatherTemp)) {
    for (i = 0; i < mildWeatherDrinks.length; i++) {
      $("#drink" + i).html(mildWeatherDrinks[i]);
    }
    //for weather above 70
  } else {
    for (i = 0; i < hotWeatherDrinks.length; i++) {
      $("#drink" + i).html(hotWeatherDrinks[i]);
    }
  }
}

//get drink recipe
//click function for displaying directions and ingredients
$(".drink-list").click(function () {
  console.log("enter click function");
  var drinkId = $(this).attr('id');
  var drink = $("#" + drinkId).text();
  console.log("inside drink list click function" + drink);
  getdrink(drink);
});

function getdrink(drink) {
  // queryURL endpoint for gin API
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {

    
    $("#ing").html("");
    console.log(response.drinks[0].strDrinkThumb);
    $("#image").prepend(`<img class="card-img-top" src="${response.drinks[0].strDrinkThumb}">`);
    $("#directions").html(response.drinks[0].strInstructions);
    //loop through all ingredients and only print valid ingredients
    for (i = 1; i <= 15; i++) {
      var ingredientId = "strIngredient" + i;
      
      if(((response.drinks[0][ingredientId])=="") || ((response.drinks[0][ingredientId])==null)){
      
      }
    
      else{
        $("#ing").append("<li class=\"list-group-item\">" + response.drinks[0][ingredientId] + "</li>");
      }
    }

    //error handling 
  }).fail(function (response) {

  });
}
