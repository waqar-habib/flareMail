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
$("#generateCodeBtn").on("click", function() {
  event.preventDefault();

  // Navigate to generatedCode.html
  location.href = "./generatedCode02.html";

  // Grab values from text boxes
  fullName = $("#fullName")
    .val()
    .trim();
  officePhone = $("#phone")
    .val()
    .trim();
  jobTitle = $("#jobTitle")
    .val()
    .trim();
  company = $("#companyName")
    .val()
    .trim();
  website = $("#websiteURL")
    .val()
    .trim();
  email = $("#emailAddress")
    .val()
    .trim();
  addressOne = $("#address")
    .val()
    .trim();
  addressTwo = $("#address2")
    .val()
    .trim();
  city = $("#city")
    .val()
    .trim();
  state = $("#state")
    .val()
    .trim();
  zip = $("#zip")
    .val()
    .trim();

  // Clg check CLEAR
  //console.log(fullName, cellNumber, email, jobTitle, department, company, website, officePhone, officeFax, addressOne, addressTwo, city, state, zip);

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
database.ref().on("child_added", function(childSnapshot) {
  // Create a var to store the childSnapshot command - csv = child snapshot value
  var csv = childSnapshot.val();

  // Clg childSnapshot - CLEAR
  //console.log(csv);

  // Store incoming data from Firebase into vars
  var fullName = csv.fullName;
  var phone = csv.phone;
  var cellPhone = csv.cellPhone;
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
  //console.log(fullName);

  // Print data into div

  // From <body> to <tbody> where the full name code starts
  $("#generatedCode").empty();
  $("#generatedCode").append(
    '<div class="presentational-container" style="padding: 20px; background-color: #fff" ;> <table role="presentation" style="background: none; margin: 0; padding: 10px 10px 0; border-width: 3px 0 0 0; border-style: solid; border-color: rgb(78, 78, 78);"> <tbody> <!-- Image --> <tr class="outer-row" style="padding: 0 12px 0 0;"> <td class="image-cell" style="padding: 0 12px 0 0; text-decoration: none;"> <img src="./images/waqar.png" name="preview-image-url" alt="Signature Image" style="vertical-align: middle;width:120px; border-radius: 100%;"/> </td> <td class="description-cell" style="padding: 0 0 0 12px;"> <table role="presentation" style="background: none; border: 0px; margin: 0; padding: 0;"> <tbody>' +
      // Concatenate full name <tr> tag
      '<tr> <td colspan="2" class="full-name" style="font-weight: bold; color: rgb(0, 0, 0); font-size: 24px; font-family: Arial, Helvetica, sans-serif;">' + 
      fullName +
      "</td> </tr>" +
      // Concatenate phone <tr> tag
      '<tr><td colspan="2" class="phone" style="padding-bottom: 10px; vertical-align: top; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">' + 'Phone: ' +
      phone +
      "</td> </tr>" +
      // Concatenate job title <tr> tag
      '<tr> <td colspan="2" class="title" style="padding-bottom: 10px; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">' +
      jobTitle +
      "</td> </tr>" +
      // Concatenate company <tr> tag
      '<tr> <td colspan="2" class="company" style="padding-bottom: 10px; vertical-align: top; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">' +
      company +
      "</td></tr>" +
      // Concatenate website <tr> tag
      '<tr> <td valign="top" class="website" style="padding-bottom: 10px; vertical-align: top; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif;"> <a href="" style="color: rgb(5, 113, 255); text-decoration: none; font-weight: normal; font-size: 14px;">' + 'Website: ' +
      website +
      "</a> </td> </tr>" +
      // Concatenate email <tr> tag
      '<tr> <td colspan="2" class="email" style="padding-bottom: 10px; vertical-align: top; color: #333333; font-size: 14px; font-family: Arial, Helvetica, sans-serif;"> <a href="">' + 'Email: ' + email + "</a> </td> </tr>" +
      
      /* Uncomment out the code from ln 177-196, once the template has been modified to include the address, State, city and zip fields.
      // Concatenate address one <tr> tag
      "" +
      addressOne +
      "</td></tr>" +
      // Concatenate address two <tr> tag
      "" +
      addressTwo +
      "</td></tr>" +
      // Concatenate city <tr> tag
      "" +
      city +
      "</td></tr>" +
      // Concatenate state <tr> tag
      "" +
      state +
      "</td></tr>" +
      // Concatenate zip <tr> tag
      "" +
      zip +
      "</td></tr>" +
      */

      // 4.17.16 - Modify the code below once the form fields for social media are added so app.js concatenates the user input with the code below. Also, update the social media icons links.

      // Print rest of html code that doesn't have user input
      '<!-- Social Media --> <tr> <td colspan="2" class="social-icons" style="padding-top: 5px;"> <ul style="list-style: none; padding: 0; margin: 0; height: 25px;"> <li style="display: inline-block;"> <a href="" style="text-decoration: none;"><img src="https://image.flaticon.com/icons/svg/174/174848.svg" alt="Let\'s be friends on Facebook." style="width: 25px; height: 25px;" /> </a> </li> <li style="display: inline-block;"> <a href="" style="text-decoration: none;"> <img src="https://image.flaticon.com/icons/svg/174/174876.svg" alt="Follow me on Twitter!" style="width: 25px; height: 25px;" /> </a> </li> <li style="display: inline-block;"> <a href="" style="text-decoration: none;"> <img src="https://image.flaticon.com/icons/svg/174/174855.svg" alt="Follow me on Instagram!" style="width: 25px; height: 25px;" /> </a> </li> <li style="display: inline-block;"> <a href="" style="text-decoration: none;"> <img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="Connected with me on LinkedIn!" style="width: 25px; height: 25px;" /> </a> </li> </ul> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div></body>'
  );
});
