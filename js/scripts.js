//(user interface)front-end logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    var result = pingpong(userInput);

    $("#result").text(result);
    $("#result").show();
  });
});



//(business)back-end logic
var pingpong = function(number)  {
  if (number % 3 === 0 && number % 5 === 0) {
    output.push("pingpong");
  } else if (number % 3 === 0) {
    output.push("ping");
  } else if (number % 5 === 0) {
    output.push("pong");
  } else {
    output.push(number);
  });
});
