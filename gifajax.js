$(document).ready(function() {
  var APIkey = "f58dp5agD3eOmDeGK92kLGWpXEGuI36h";

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=success&key=f58dp5agD3eOmDeGK92kLGWpXEGuI36h&limit=1";

  console.log(queryURL);

  // Make an AJAX call using queryURL
  $.ajax({
    url: queryURL,
    methond: "GET"
  }).then(function(response) {
    console.log(response);

    // Store the response in var results
    var results = response.data;
    console.log(results);
  });
});
