const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#firstname');
const nameInput2 = document.querySelector('#lastname');
const birthInput = document.querySelector('#birthdate');
const genderInput = document.querySelector('#gender');
const cprInput = document.querySelector('#cpr');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const picInput = document.querySelector('#profilepic');
const submitBtn = document.querySelector('#submit');
const forgetBtn = document.querySelector('#forget');

form.addEventListener('submit', function(e){
  e.preventDefault();
});

submitBtn.addEventListener('click', function(){
  localStorage.setItem('firstname', nameInput.value);
  localStorage.setItem('lastname', nameInput2.value);
  localStorage.setItem('birthdate', birthInput.value);
  localStorage.setItem('gender', genderInput.value);
  localStorage.setItem('cpr', cprInput.value);
  localStorage.setItem('email', emailInput.value);
  localStorage.setItem('password', passwordInput.value);
  localStorage.setItem('profilepic', picInput.value);
});

forgetBtn.addEventListener('click', function(){
  localStorage.removeItem('firstname');
  localStorage.removeItem('lastname');
  localStorage.removeItem('birthdate');
  localStorage.removeItem('gender');
  localStorage.removeItem('cpr');
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  localStorage.removeItem('profilepic');
});


//Creating a function that will give the user an option to hide / show their password (by setting its type to either password or text)
function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//Creating a function that will give the user an option to hide / show their CPR-number (by setting its type to either password or text)
function showCPR() {
  var y = document.getElementById("cpr");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}

//Creating a function that validates that the uploaded file is picture and displays an alert if it isn't.
//Blatently stolen from https://stackoverflow.com/questions/3828554/how-to-allow-input-type-file-to-accept-only-image-files
function validatePicture(){
  var fileName = document.getElementById("profilepic").value;
  var idxDot = fileName.lastIndexOf(".") + 1;
  var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
  if (extFile=="jpg" || extFile=="jpeg" || extFile=="png")
    {
  }else{
      alert("Only jpg/jpeg and png files are allowed!");
      document.getElementById("profilepic").value = '';
  }
}

//Creating a function that lets the user know that their profile has been created upon submitting
function submitConf() {
  alert("User created!");
}

//Defining variables that correspond to the required inputs in the password
var userPassword = document.getElementById("password");
var lowercase = document.getElementById("lowercase");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
userPassword.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
userPassword.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
userPassword.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(userPassword.value.match(lowerCaseLetters)) {  
    lowercase.classList.remove("invalid");
    lowercase.classList.add("valid");
  } else {
    lowercase.classList.remove("valid");
    lowercase.classList.add("invalid");
  }
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(userPassword.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  // Validate numbers
  var numbers = /[0-9]/g;
  if(userPassword.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  // Validate length
  if(userPassword.value.length >= 6 && userPassword.value.length <= 16) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
