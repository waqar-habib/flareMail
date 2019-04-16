var config = {
  apiKey: "AIzaSyBtDOAmnjJ0ZnBAAVHSRNyFAjTdxd2LzyU",
  authDomain: "fir-test-819e4.firebaseapp.com",
  databaseURL: "https://fir-test-819e4.firebaseio.com",
  projectId: "fir-test-819e4",
  storageBucket: "fir-test-819e4.appspot.com",
  messagingSenderId: "797703264978"
};

var database = firebase.database();

var fullName = "";
var cellNumber = "";
var email = "";
var jobTitle = "";
var department = "";
var company = "";
var webSite = "";
var officePhone = "";
var officeFax = "";
var addressOne = "";
var addressTwo = "";
var city = "";
var state = "";
var zip = "";

// On click function to grab values from text boxes
$("#generateCodeBtn").on("click", function() {
  event.preventDefault();
  location.href = "./generatedCode.html";

  fullName = $("#userName")
    .val()
    .trim();
  cellNumber = $("#userCellPhone")
    .val()
    .trim();
  email = $("#userEmailAddress")
    .val()
    .trim();
  jobTitle = $("#userJobTitle")
    .val()
    .trim();
  department = $("#userDepartment")
    .val()
    .trim();
  company = $("#userCompanyName")
    .val()
    .trim();
  webSite = $("#userWebsiteURL")
    .val()
    .trim();
  officePhone = $("#userOfficePhone")
    .val()
    .trim();
  officeFax = $("#userOfficeFax")
    .val()
    .trim();
  addressOne = $("#inputAddress")
    .val()
    .trim();
  addressTwo = $("#inputAddress2")
    .val()
    .trim();
  city = $("#inputCity")
    .val()
    .trim();
  state = $("#inputState")
    .val()
    .trim();
  zip = $("#inputZip")
    .val()
    .trim();

  var userinfo = {
    fullName: fullName,
    cellNumber: cellNumber,
    email: email,
    jobTitle: jobTitle,
    department: department,
    company: company,
    webSite: webSite,
    officePhone: officePhone,
    officeFax: officeFax,
    addressOne: addressOne,
    addressTwo: addressTwo,
    city: city,
    state: state,
    zip: zip,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  };
  database.ref().push(userInfo);
  $("#fullName").val("");
  $("#cellPhone").val("");
  $("#emailAddress").val("");
  $("#jobTitle").val("");
  $("#department").val("");
  $("#companyName").val("");
  $("#websiteURL").val("");
  $("#officePhone").val("");
  $("#officeFax").val("");
  $("#address").val("");
  $("#address2").val("");
  $("#city").val("");
  $("#state").val("");
  $("#zip").val("");
});

database.ref().on("child_added", function(childSnapshot) {
  var csv = childSnapshot.val();

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

  $("#generatedCode").text(
    '<body><div class="presentational-container" style="padding: 20px; box-shadow: 2px 2px 10px 5px; background-color: #fff"><table role="presentation" style="background: none; margin: 0; padding: 10px 10px 0; border-width: 3px 0 0 0; border-style: solid; border-color: #232C9F"><tbody><tr class="outer-row" style="padding: 0 12px 0 0;"><td class="image-cell"><img src="https://" name="preview-image-url" alt="Signature Image" /></td><td class="description-cell"><table role="presentation"><tbody>' +
      '<tr> <td colspan="2" class="full-name" style="font-weight: bold; color: #232C9F; font-size: 24px; font-family: Arial, Helvetica, sans-serif;">' +
      fullName +
      "</td> </tr>" +
      '<tr><td colspan="2" class="phone">' +
      cellNumber +
      "</td></tr>" +
      '<tr><td colspan="2" class="email">' +
      email +
      "</td></tr>" +
      '<tr><td colspan="2" class="title">' +
      jobTitle +
      "</td></tr>" +
      "" +
      department +
      "</td></tr>" +
      '<tr><td colspan="2" class="company">' +
      company +
      "</td></tr>" +
      '<tr><td valign="top" class="website"><a href="">' +
      website +
      "</td></tr>" +
      "" +
      officePhone +
      "</td></tr>" +
      "" +
      officeFax +
      "</td></tr>" +
      "" +
      addressOne +
      "</td></tr>" +
      "" +
      addressTwo +
      "</td></tr>" +
      "" +
      city +
      "</td></tr>" +
      "" +
      state +
      "</td></tr>" +
      "" +
      zip +
      "</td></tr>" +
      '<tr><td colspan="2" class="social-icons"><ul><li><a href=""><img src="https://image.flaticon.com/icons/svg/174/174848.svg" alt="Let\'s be friends on Facebook." /></a></li><li><a href=""><img src="https://image.flaticon.com/icons/svg/174/174876.svg" alt="Follow me on Twitter!" /></a></li><li><a href=""><img src="https://image.flaticon.com/icons/svg/174/174855.svg" alt="Follow me on Instagram!" /></a></li><li><a href=""><img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="Connected with me on LinkedIn!" /></a></li></ul></td></tr></tbody></table></td></tr></tbody></table></div></body>'
  );
});
