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

var fullName = "";
var phone = "";
var jobTitle = "";
var company = "";
var website = "";
var email = "";
var addressOne = "";
var addressTwo = "";
var city = "";
var state = "";
var zip = "";

// On click function for generatedCode.html
$("#generateCodeBtn").on("click", function () {
  event.preventDefault();

  // Navigate to generatedCode.html
  location.href = "./generatedCode02.html";

  // Grab values from text boxes
  fullName = $("#fullName").val().trim();
  phone = $("#phone").val().trim();
  jobTitle = $("#jobTitle").val().trim();
  company = $("#companyName").val().trim();
  website = $("#websiteURL").val().trim();
  email = $("#emailAddress").val().trim();
  addressOne = $("#address").val().trim();
  addressTwo = $("#address2").val().trim();
  city = $("#city").val().trim();
  state = $("#state").val().trim();
  zip = $("#zip").val().trim();

  // Create an object to store all user input
  var userInfo = {
    fullName: fullName,
    phone: phone,
    jobTitle: jobTitle,
    company: company,
    website: website,
    email: email,
    addressOne: addressOne,
    addressTwo: addressTwo,
    city: city,
    state: state,
    zip: zip
  };
  //console.log(userInfo);

  // Push user info to Firebase database - Successfully being pushed
  database.ref().push(userInfo);

  // Clg Check CLEAR
  //console.log(userInfo.Full_Name);
  //console.log(userInfo.zip);

  // Clear Previous Input
  $("#fullName").val("");
  $("#phone").val("");
  $("#jobTitle").val("");
  $("#companyName").val("");
  $("#websiteURL").val("");
  $("#emailAddress").val("");
  $("#address").val("");
  $("#address2").val("");
  $("#city").val("");
  $("#state").val("");
  $("#zip").val("");
}); // end generateCodeBtn function

// Pull data from Firebase
database.ref().on("child_added", function (childSnapshot) {
  // Create a var to store the childSnapshot command - csv = child snapshot value
  var csv = childSnapshot.val();

  // Clg childSnapshot - CLEAR
  //console.log(csv);

  // Store incoming data from Firebase into vars
  var fullName = csv.fullName;
  var phone = csv.phone;
  var jobTitle = csv.jobTitle;
  var company = csv.company;
  var website = csv.website;
  var email = csv.email;
  var addressOne = csv.addressOne;
  var addressTwo = csv.addressTwo;
  var city = csv.city;
  var state = csv.state;
  var zip = csv.zip;

  // Clg check - CLEAR
  //console.log(email);

  // Print data into div

  // From <body> to <tbody> where the full name code starts
  $("#generatedCode").empty();

  $("#generatedCode").append(
    '<div id="sig-02" style="min-height: 50px; line-height: 17px; margin: 6px 0; padding: 8px; font-family: "Lucida Grande", Verdana, Arial, Sans-Serif; font-size: 11px; color: #606f78; min-width: 530px; border: solid; border-width: 1px 0 1px 0; border-color: rgb(78, 78, 78);"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="format-detection" content="telephone=no"><table role="presentation" style="background: none; border: 0px; margin: 0; padding: 0;"> <tbody>' +
    // Concatenate full name <tr> tag
    '<tr><td colspan="2" class="full-name" id="full-name-02"style="font-weight: bold; color: rgb(5, 113, 255); font-size: 24px; font-family: Arial, Helvetica, sans-serif; line-height: 2rem;">' + fullName + '</td></tr>' +
    // Concatenate phone <tr> tag
    '<tr><td colspan="2" class="phone" id="phone-02" style="padding-bottom: 10px; vertical-align: top; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: .4rem;">' + 'Phone: ' + phone + '</td></tr>' +
    // Concatenate job title <tr> tag
    '<tr><td colspan="2" class="title" id="title-02" style="padding-bottom: 10px; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: .4rem;">' + jobTitle + "</td> </tr>" +
    // Concatenate company <tr> tag
    '<tr><td colspan="2" class="company" id="company-02" style="padding-bottom: 10px; vertical-align: top; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: .4rem;">' + company + "</td></tr>" +
    // Concatenate website <tr> tag
    '<tr><td valign="top" class="website" id="website-02" style="padding-bottom: 10px; vertical-align: top; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: .4rem;"><a href="" style="color: #333333; text-decoration: none; font-weight: normal; font-size: 14px; text-decoration: none;">' + 'Website: ' + website + "</a></td></tr>" +
    // Concatenate email <tr> tag
    '<tr><td colspan="2" class="email" id="email-02" style="padding-bottom: 10px; vertical-align: top; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: .4rem;"><a href="" style="color: #333333; text-decoration: none; font-weight: normal; font-size: 14px; text-decoration: none;">' + 'Email: ' + email + "</a></td></tr>" +
    // Concatenate address, city, state, zip
    // '<tr> <td colspan="2" id="addressTwo" style="padding-bottom: 10px; vertical-align: top; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif;"> <p><span id="addressOne"></span>' + addressOne + '</span><span id="addressTwo"> </span>' + addressTwo + '</span></p> <p><span id="city">' + city + '</span> | <span id="state">' + state + '</span> | <span id="zip">' + zip + '</span></p> </td> </tr>' +
    // Closing tags
    '</tbody> </table> </td> </tr> </tbody> </table> </div></body>'

  );
});