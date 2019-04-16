// Create Another One! button function - generatedCode.html (ln80)
$("#newSignatureBtn").on("click", function(){
    // empties out the generateCode div
    $("#generateCode").empty();
    // Empties out the Firebase Database so we're not storing user data
    database.ref().remove();
    // Navigates user back to home page. 
    location.href = "./index.html";
}); 

// Initialize Firebase

var config = {
    apiKey: "AIzaSyBtDOAmnjJ0ZnBAAVHSRNyFAjTdxd2LzyU",
    authDomain: "fir-test-819e4.firebaseapp.com",
    databaseURL: "https://fir-test-819e4.firebaseio.com",
    projectId: "fir-test-819e4",
    storageBucket: "fir-test-819e4.appspot.com",
    messagingSenderId: "797703264978"
  };
  
  firebase.initializeApp(config);
  
  // Create a var to store Firebase Data
  var database = firebase.database();

