//(business)back-end logic
pingPong = function(input)  {

  var results = [];

  for (var number = 1; number <= input; number++) {
    if (number % 15 === 0) {
      //$("#result").text("pingpong");
      results.push("pingpong");
      //$("#result").append("<li>ping pong</li>");
    } else if (number % 3 === 0) {
      results.push("ping");
    // $("#result").text("pong");
    //  $("#result").append("<li>ping</li>");
    } else if (number % 5 === 0) {
      results.push("pong");
  //    $("#result").text("ping");
    //  $("#result").append("<li>pong</li>");
    } else {
      results.push(number)
      //$("#result").text(number);
      //$("#result").append("<li>" + number + "</li>");
    }
  }
  return results.join(", ");
};


//(user interface)front-end logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

  var userInput = $("input#userValue").val();
  var result = pingPong(userInput);

    //$("#result").empty();
    $("#result").text(result);
    $("#result").show();
    //var userInput = $("input").val();
  //  addInput(userInput);
  });
});
