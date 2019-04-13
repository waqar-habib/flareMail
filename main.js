
var config = {
  apiKey: "AIzaSyDVIAQhYygPg8BTU_S9L_8lREoDe5eIpkA",
  authDomain: "flaremail-5c49d.firebaseapp.com",
  databaseURL: "https://flaremail-5c49d.firebaseio.com",
  projectId: "flaremail-5c49d",
  storageBucket: "flaremail-5c49d.appspot.com",
  messagingSenderId: "139402945796"
};
firebase.initializeApp(config);

<<<<<<< HEAD
=======
var config = {
  apiKey: "AIzaSyDVIAQhYygPg8BTU_S9L_8lREoDe5eIpkA",
  authDomain: "flaremail-5c49d.firebaseapp.com",
  databaseURL: "https://flaremail-5c49d.firebaseio.com",
  projectId: "flaremail-5c49d",
  storageBucket: "flaremail-5c49d.appspot.com",
  messagingSenderId: "139402945796"
};
firebase.initializeApp(config);

>>>>>>> f09ea99f08d961266a61d6f9ad7225333af2b81e
var database = firebase.database();

var firstName = "";
var lastName = "";
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
<<<<<<< HEAD
var state ="";
var zip = "";

// On click function for generatedCode.html
$("#generateCodeBtn").on('click', function () {
   //This button should navigate user to generatedCode.html
    event.preventDefault();
    firstName = $("#userFirstName").val().trim();
    lastName = $("userLastName").val().trim();
    cellNumber = $("#userCellPhone").val().trim();
    email = $("#userEmailAddress").val().trim();
    jobTitle = $("#userJobTitle").val().trim();
    department = $("#userDepartment").val().trim();
    company = $("#userCompanyName").val().trim();
    webSite = $("#userWebsiteURL").val().trim();
    officePhone = $("#userOfficePhone").val().trim();
    officeFax = $("#userOfficeFax").val().trim();
    addressOne = $("#inputAddress").val().trim();
    addressTwo = $("#inputAddress2").val().trim();
    city = $("#inputCity").val().trim();
    state = $("#inputState").val().trim();
    zip = $("#inputZip").val().trim();

    database.ref().push({
        firstName = firstName,
        lastName = lastName,
        cellNumber = cellNumber,
        email = email,
        jobTitle = jobTitle,
        department = department,
        company = company,
        webSite = webSite,
        officePhone = officePhone,
        officeFax = officeFax,
        addressOne = addressOne,
        addressTwo = addressTwo,
        city = city,
        state = state,
        zip = zip,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

database.ref().on("child_added", function(snapshot){
    var snapshot = 
})
=======
var state = "";
var zip = "";

// On click function for generatedCode.html
$("#generateCodeBtn").on("click", function() {
  //This button should navigate user to generatedCode.html
  event.preventDefault();
  firstName = $("#userFirstName")
    .val()
    .trim();
  lastName = $("userLastName")
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
    firstName: firstName,
    lastName: lastName,
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
});

database.ref().on("child_added", function(snapshot) {
  var sv = snapshot.val();
});
>>>>>>> f09ea99f08d961266a61d6f9ad7225333af2b81e
