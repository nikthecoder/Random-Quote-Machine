$(document).ready(function() {
    function fetchRandomQuote() {
      $.getJSON("https://api.quotable.io/random", function(data) {
        $("#text").text(data.content);
        $("#author").text("- " + data.author);
      });
    }
  
    // Initial load of a random quote
    fetchRandomQuote();
  
    $("#new-quote").on("click", function() {
      fetchRandomQuote();
    });
  });
  