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
var cellNumber = "";
var email = "";
var jobTitle = "";
var department = "";
var company = "";
var website = "";
var officePhone = "";
var officeFax = "";
var addressOne = "";
var addressTwo = "";
var city = "";
var state = "";
var zip = "";

// On click function for generatedCode.html
$("#generateCodeBtn").on("click", function () {
  
  event.preventDefault();

  // Navigate to generatedCode.html
  location.href = "./generatedCode.html";

  // Grab values from text boxes
  fullName = $('#fullName').val().trim();
  cellNumber = $('#cellPhone').val().trim();
  email = $('#emailAddress').val().trim();
  jobTitle = $('#jobTitle').val().trim();
  department = $('#department').val().trim();
  company = $('#companyName').val().trim();
  website = $('#websiteURL').val().trim();
  officePhone = $('#officePhone').val().trim();
  officeFax = $('#officeFax').val().trim();
  addressOne = $('#address').val().trim();
  addressTwo = $('#address2').val().trim();
  city = $('#city').val().trim();
  state = $('#state').val().trim();
  zip = $('#zip').val().trim();

  // Clg check CLEAR
  //console.log(fullName, cellNumber, email, jobTitle, department, company, website, officePhone, officeFax, addressOne, addressTwo, city, state, zip);

  // Create an object to store all user input
  var userInfo = {
    fullName: fullName,
    cellNumber: cellNumber,
    email: email,
    jobTitle: jobTitle,
    department: department,
    company: company,
    website: website,
    officePhone: officePhone,
    officeFax: officeFax,
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
  $('#fullName').val("");
  $('#cellPhone').val("");
  $('#emailAddress').val("");
  $('#jobTitle').val("");
  $('#department').val("");
  $('#companyName').val("");
  $('#websiteURL').val("");
  $('#officePhone').val("");
  $('#officeFax').val("");
  $('#address').val("");
  $('#address2').val("");
  $('#city').val("");
  $('#state').val("");
  $('#zip').val("");



}); // end generateCodeBtn function

// Pull data from Firebase
database.ref().on("child_added", function (childSnapshot) {

  // Create a var to store the childSnapshot command - csv = child snapshot value
  var csv = childSnapshot.val();

  // Clg childSnapshot - CLEAR
  //console.log(csv);

  // Store incoming data from Firebase into vars
  var fullName = csv.fullName;
  
  var cellNumber = csv.cellNumber;
  var email = csv.email;
  var jobTitle = csv.jobTitle;
  var department = csv.department;
  var company = csv.company;
  var website = csv.website;
  var officePhone = csv.officePhone;
  var officeFax = csv.officeFax;
  var addressOne = csv.addressOne;
  var addressTwo = csv.addressTwo;
  var city = csv.city;
  var state = csv.state;
  var zip = csv.zip;

  // Clg check - CLEAR
  //console.log(fullName);

  // Print data into div

  // From <body> to <tbody> where the full name code starts 
  $('#generatedCode').text('<body><div class="presentational-container" style="padding: 20px; box-shadow: 2px 2px 10px 5px; background-color: #fff"><table role="presentation" style="background: none; margin: 0; padding: 10px 10px 0; border-width: 3px 0 0 0; border-style: solid; border-color: #232C9F"><tbody><tr class="outer-row" style="padding: 0 12px 0 0;"><td class="image-cell"><img src="https://" name="preview-image-url" alt="Signature Image" /></td><td class="description-cell"><table role="presentation"><tbody>'

  // Concatenate full name <tr> tag
  + '<tr> <td colspan="2" class="full-name" style="font-weight: bold; color: #232C9F; font-size: 24px; font-family: Arial, Helvetica, sans-serif;">' + fullName + '</td> </tr>'

  
  // Concatenate cell number <tr> tag
  + '<tr><td colspan="2" class="phone">' + cellNumber + '</td></tr>'
  // Concatenate email <tr> tag
  + '<tr><td colspan="2" class="email">' + email + '</td></tr>'
  // Concatenate job title <tr> tag
  + '<tr><td colspan="2" class="title">' + jobTitle + '</td></tr>'
  // Concatenate department <tr> tag
  + '' + department + '</td></tr>'
  // Concatenate company <tr> tag
  + '<tr><td colspan="2" class="company">' + company + '</td></tr>'
  // Concatenate website <tr> tag
  + '<tr><td valign="top" class="website"><a href="">' + website + '</td></tr>'
  // Concatenate office phone <tr> tag
  + '' + officePhone + '</td></tr>'
  // Concatenate office fax <tr> tag
  + '' + officeFax + '</td></tr>'
  // Concatenate address one <tr> tag
  + '' + addressOne + '</td></tr>'
  // Concatenate address two <tr> tag
  + '' + addressTwo + '</td></tr>'
  // Concatenate city <tr> tag
  + '' + city + '</td></tr>'
  // Concatenate state <tr> tag
  + '' + state + '</td></tr>'
  // Concatenate zip <tr> tag
  + '' + zip + '</td></tr>'

  
  // Print rest of html code that doesn't have user input
  + '<tr><td colspan="2" class="social-icons"><ul><li><a href=""><img src="https://image.flaticon.com/icons/svg/174/174848.svg" alt="Let\'s be friends on Facebook." /></a></li><li><a href=""><img src="https://image.flaticon.com/icons/svg/174/174876.svg" alt="Follow me on Twitter!" /></a></li><li><a href=""><img src="https://image.flaticon.com/icons/svg/174/174855.svg" alt="Follow me on Instagram!" /></a></li><li><a href=""><img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="Connected with me on LinkedIn!" /></a></li></ul></td></tr></tbody></table></td></tr></tbody></table></div></body>');

});




