$(document).ready(function() {
  var APIkey = "f58dp5agD3eOmDeGK92kLGWpXEGuI36h";

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=success&key=f58dp5agD3eOmDeGK92kLGWpXEGuI36h&limit=1";

  console.log(queryURL);

  $.ajax({
    url: queryURL,
    methond: "GET"
  }).then(function(response) {
    console.log(response);

    var results = response.data;
    console.log(results);

    // For each result write the data in #images div
    for (let index = 0; index < results.length; index++) {
      var gifDiv = $('<div>');
      gifDiv.addClass('d-flex pt-3 pb-3 mb-3 mt-3 pl-2');
      // Write rating in an h3 tag
      var gifRating = $('<h3>');
      // Add padding, make rating upperCase
      gifRating.addClass('pr-2 pl-4 upperCase').text("Rating: " + results[index].rating);
      // Write title in an h2 tag
      var gifTitle = $('<h2>');
      // Add padding
      gifTitle.addClass('pr-2 pl-4').text("Title: " + results[index].title);
      // Add white border around images
      var gifImage = $('<img>').addClass('imgBorder');
      // Add still image URL
      gifImage.attr('src', results[index].images.fixed_height_still.url);
      gifImage.attr('data-still', results[index].images.fixed_height_still.url);
      // Add animated image URL
      gifImage.attr('data-animate', results[index].images.fixed_height.url);
      // Set original data-state to still
      gifImage.attr('data-state', 'still');
      // Write the above info to DOM   
      gifDiv.prepend(gifTitle);
      gifDiv.prepend(gifRating);
      gifDiv.prepend(gifImage);

      $('#images').prepend(gifDiv);
 
      // Make an on-click event to play/pause the GIFs
  
      gifImage.on('click', function(){
          // Create var to store the current data-state
          var state = $(this).attr("data-state");
          // If/else statement checks if state is still
          if (state === "still"){
              // If still change image src to data-animate
              $(this).attr('src', $(this).attr("data-animate"));
              // And set the data-state to animate
              $(this).attr('data-state', 'animate');
          } else {
              // else, change image src to data-still
              $(this).attr('src', $(this).attr('data-still'));
              // and set the data-state to still
              $(this).attr('data-state', 'still');
          }
    });

  });
});
