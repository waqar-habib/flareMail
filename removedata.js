// Create Another One! button function - generatedCode.html (ln80)
$("#newSignatureBtn").on("click", function() {
  // empties out the generateCode div
  $("#generateCode").empty();
  // Empties out the Firebase Database so we're not storing user data
  database.ref().remove();
  // Navigates user back to home page.
  location.href = "./index.html";
});
