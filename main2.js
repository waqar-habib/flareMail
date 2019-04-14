var config = {
  apiKey: "AIzaSyDVIAQhYygPg8BTU_S9L_8lREoDe5eIpkA",
  authDomain: "flaremail-5c49d.firebaseapp.com",
  databaseURL: "https://flaremail-5c49d.firebaseio.com",
  projectId: "flaremail-5c49d",
  storageBucket: "flaremail-5c49d.appspot.com",
  messagingSenderId: "139402945796"
};
firebase.initializeApp(config);

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
$("#generateCodeBtn").on("click", function(event) {
  event.preventDefault();
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

  database.ref().push({
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
  });
  //empty the text boxes
  $("#userName").val("");
  $("#userCellPhone").val("");
  $("#userEmailAddress").val("");
  $("#userJobTitle").val("");
  $("#userDepartment").val("");
  $("#userCompanyName").val("");
  $("#userWebsiteURL").val("");
  $("#userOfficePhone").val("");
  $("#userOfficeFax").val("");
  $("#inputAddress").val("");
  $("#inputAddress2").val("");
  $("#inputCity").val("");
  $("#inputState").val("");
  $("#inputZip").val("");

  return false;
});

database.ref().on(
  "child_added",
  function(snapshot) {
    var sv = snapshot.val();
  },
  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  }
);
