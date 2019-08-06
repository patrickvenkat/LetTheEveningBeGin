//drink array objects
//created in Excel based on the JSON and then added into code
//eliza and patrick
coldWeatherDrinks = ["A.D.M. (After Dinner Mint)", "Cosmopolitan", "Espresso Martini", "Manhattan", "Old Fashioned", "Oatmeal Cookie", "The Jimmy Conway", "A1", "Adam & Eve", "Adios Amigos Cocktail", "Brigadier", "Penicillin"];
mildWeatherDrinks = ["A True Amaretto Sour", "Aviation", "Cherry Electric Lemonade", "Cream Soda", "Dirty Martini", "Gimlet", "The Last Word", "Vesper", "Adios Amigos Cocktail", "Duchamp's Punch", "Flaming Lamborghini", "Gin Rickey"];
hotWeatherDrinks = ["A Gilligan's Island", "Absolut Summertime", "Ace", "Bahama Mama", "Bora Bora", "Lemon Drop", "Miami Vice", "Mojito", "Paloma", "Shark Attack", "Tequila Sunrise", "Greyhound"];
//global variables
//cold and mild weather only defined - hot weather would be anything above these parameters
//eliza and patrick
var coldWeatherTemp = 50;
var mildWeatherTemp = 70;
//click function for city search
//patrick
$("#city-search").click(function () {
	var city = $("#city-name").val();
	$("#city-weather").html("");
	getCityWeather(city);
});
//function to get city's weather
//patrick
function getCityWeather(city) {
	//queryURL endpoint
	//eliza, patrick, puder, marvin
	var queryURL = "https://api.openweathermap.org/data/2.5/weather?APIkey=77beb286ab5ffea55b1e6542f41987d9&q=" + city;
	//ajax call inside the getCityWeather function to get the temperature and conditions
	//patrick
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function (response) {
		//error handling
		//patrick
		if (response.cod !== 200) {
			alert(response.Error);
		} else {
			//below we convert our kelvins to farenheit
			//patrick
			var cityTemp = Math.round(((response.main.temp - 273.15) * 9 / 5) + 32);
			//replace temperature and weather in the HTML
			//eliza and patrick
			$("#city-temp").html("<p> Temperature  :  " + cityTemp + "F</p>");
			$("#city-weather").html("<p> Weather  :  " + response.weather[0].description + "</p>");
			displayDrinks(cityTemp);
		}
		//error handling using a modal
		//eliza
	}).fail(function (response) {
		if (response.cod !== 200) {
			$("#modal").html("Not a valid city name!");
			modal.style.display = "block";
			
		} else {
			//replace temperature and weather in the HTML
			//eliza and patrick
			var cityTemp = Math.round(((response.main.temp - 273.15) * 9 / 5) + 32);
			$("#city-temp").html("<p> Temperature  :  " + cityTemp + "F</p>");
			$("#city-weather").html("<p> Weather  :  " + response.weather[0].description + "</p>");
		}
	});
}

//click function to exist modal when any other part of the page is clicked
//eliza
window.onclick = function(event) {
	if (event.target !== modal) {
	  modal.style.display = "none";
	}
}
//function to display drinks based on temperature received above
//eliza and patrick
function displayDrinks(temp) {
	//for weather under 50 (cold)
	if (temp < coldWeatherTemp) {
		//loops through cold drink recommendations
		for (i = 0; i < coldWeatherDrinks.length; i++) {
			$("#drink" + i).html(coldWeatherDrinks[i]);
		}
		//for weather between 50 and 70 (mild)
	} else if ((temp >= coldWeatherTemp) && (temp <= mildWeatherTemp)) {
		//loops through mild drink recommendations
		for (i = 0; i < mildWeatherDrinks.length; i++) {
			$("#drink" + i).html(mildWeatherDrinks[i]);
		}
		//for weather above 70 (hot)
	} else {
		//loops through hot drink recommendations
		for (i = 0; i < hotWeatherDrinks.length; i++) {
			$("#drink" + i).html(hotWeatherDrinks[i]);
		}
	}
}
//click function for displaying instructions and ingredients
//patrick
$(".drink-list").click(function () {
	var drinkId = $(this).attr('id');
	var drink = $("#" + drinkId).text();
	getdrink(drink);
});

function getdrink(drink) {
	//queryURL endpoint
	//eliza, patrick, puder, marvin
	var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
	//ajax call inside the getDrink function to get the instructions, ingredients, and image
	//patrick
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function (response) {
		//resets
		//eliza and patrick
		$("#ing").html("");
		$("#image").attr("src", response.drinks[0].strDrinkThumb);
		$("#directions").html(response.drinks[0].strInstructions);
		//loop through list of 15
		for (i = 1; i <= 15; i++) {
			var ingredientId = "strIngredient" + i;
			var measureIg = "strMeasure" + i;
			//if (or) statement to exclude empty data from display
			if (((response.drinks[0][ingredientId]) == "") || ((response.drinks[0][ingredientId]) == null)) { }
			//else statment for adding correct data to display
			else {
				$("#ing").append("<li class=\"list-group-item\">" + response.drinks[0][measureIg] + " " + response.drinks[0][ingredientId] + "</li>");
			}
		}
		//forces page to scroll down when a drink is clicked
		//patrick
		$('html, body').animate({ scrollTop: $(document).height() }, 'slow');
	});
}