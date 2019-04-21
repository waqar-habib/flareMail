$(document).ready(function() {
  var APIkey = "f58dp5agD3eOmDeGK92kLGWpXEGuI36h";

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=success&key=f58dp5agD3eOmDeGK92kLGWpXEGuI36h&limit=1";

  $.ajax({
    url: queryURL,
    methond: "GET"
  }).then(function(response) {
    var results = response.data;

    for (let index = 0; index < results.length; index++) {
      var gifDiv = $("<div>");
      var gifImage = $("<img>").addClass("imgBorder");
      gifImage.attr("src", results[index].images.fixed_height.url);
      gifImage.attr("data-animate", results[index].images.fixed_height.url);
      gifImage.attr("data-state", "animate");
      gifDiv.prepend(gifImage);
      $("#gif").prepend(gifDiv);
    }
  });
});
