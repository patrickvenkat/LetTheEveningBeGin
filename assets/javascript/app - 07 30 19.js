$("#city-search").click(function () {
  var city = $("#city-name").val();
  $("#weather").html("");
  getCityWeather(city);
});


function getCityWeather(city) {
  
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?APIkey=77beb286ab5ffea55b1e6542f41987d9&q=" + city;

  $.ajax({
    url: queryURL,
    method: "GET",
    success: function (response) {
      var fTemp = Math.round(((response.main.temp - 273.15)*9/5) + 32);
      $("#weather").append("<h2> Temperature  :  " + fTemp + "</h2>");
      $("#weather").append("<h2> Temperature  :  " + response.weather[0].description + "</h2>");
      $("#weather").append("<h2> Place Name  :  " + response.name + "</h2>");
      $("#weather").append("<h2> status code  :  " + response.cod + "</h2>");
    },
    error : function (response) {
    console.log("hello");
    console.log("i am " + response.message);
      if (response.cod == "404"){
        $("#weather").append("<h2> Sorry, " + response.cod + " is not found. Please try again.</h2>");
      }
    }
    // else {
    // var fTemp = Math.round(((response.main.temp - 273.15)*9/5) + 32);
    //   $("#weather").append("<h2> Temperature  :  " + fTemp + "</h2>");
    //   $("#weather").append("<h2> Temperature  :  " + response.weather[0].description + "</h2>");
    //   $("#weather").append("<h2> Place Name  :  " + response.name + "</h2>");
    //   $("#weather").append("<h2> status code  :  " + response.cod + "</h2>");
    // };
    // error(function(response){
    //   console.log(response.cod);
    //   if (response.cod == 200){
    //     $("#weather").append("<h2> Sorry1, " + response.cod + "is not found. Please try again.</h2>");
    //   }
    // });

  });
}

// function getCityWeather(city) {
  
//     var queryURL = "http://api.openweathermap.org/data/2.5/weather?APIkey=77beb286ab5ffea55b1e6542f41987d9&q=" + city;

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function (response) {
//       // if (response.Response === "False") {
//       //   alert(response.Error);
//       // }
//       if (response.cod == 404){
//         $("#weather").append("<h2> Sorry, " + response.message + "is not found. Please try again.</h2>");
//       }
//       else {
//       var fTemp = Math.round(((response.main.temp - 273.15)*9/5) + 32);
//         $("#weather").append("<h2> Temperature  :  " + fTemp + "</h2>");
//         $("#weather").append("<h2> Temperature  :  " + response.weather[0].description + "</h2>");
//       }
//     })
// }

$("#drink-search").click(function () {
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
  });
}
