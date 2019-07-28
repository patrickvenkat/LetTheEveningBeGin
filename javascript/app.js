$("#search").click(function() {
    var drink = $("#drink-name").val();
    $("#drink1").html("");
    getgiphy(drink);
  });
 
  function getgiphy(drink) {
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
        // createCard(response);
        // giphyList.push(response.Title);
        // for (i=0; i<response.data.length; i++){
          $("#drink1").append("<h2> Recipe   :  " + response.drinks[0].strInstructions + "</h2>");
          $("#drink1").append("<img src=" + response.drinks[0].strDrinkThumb+ ">");
          // $("#img" + i).css("margin", "10px");
 
        // }
      }
  });
 }