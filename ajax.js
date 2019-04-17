var queryURL =
  "http://apilayer.net/?=" + "&api_key=328d4149fbb8644591b1a1c0d3a4ebf7";

$.ajax({
  url: queryURL,
  methond: "GET"
}).then(function(response) {
  console.log(response);
});
