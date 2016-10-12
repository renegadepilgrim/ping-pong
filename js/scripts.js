//(business)back-end logic
pingpong = function(userNumber)  {

  var result = [];

  for (var number =1; number <= userNumber; number++) {
    if (number % 15 === 0) {
      result.push("pingpong");
    //$("#result").append("ping pong");
    } else if (number % 3 === 0) {
      result.push("pong");
  //  $("#result").append("ping");
    } else if (number % 5 === 0) {
      result.push("ping");
  //  $("#result").append("pong");
    } else {
      result.push(number);
  //  $("#result").append(number);
    }
  }
  return result.join(", ");
};


//(user interface)front-end logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

  //$("#result").empty();

    var userInput = $("input#userValue").val();
    var result = pingpong(userInput);

    $("#result").text(result);
    $("#result").show();
  });
});
