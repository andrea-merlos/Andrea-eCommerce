// gets button elemnt and attach evenListeener that runs the function
document.getElementById("button").addEventListener("click", function (event) {
  // Prevent function form submission from reloading
  event.preventDefault();

  // Get form value from input then using a method called trim witch makes it easier to validate
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const comments = document.querySelector("textarea").value.trim();

  // Validation checks
  let isValid = true;
  let errorMessage = "";
  // no input then first name will be false and will run the code the error message and will change the variable validatoin
  if (!firstName) {
    errorMessage += "First Name is required.\n";
    isValid = false;
  }
  // no input then first name will be false and will run the code the error message and will change the variable validatoin (! si no)
  if (!lastName) {
    errorMessage += "Last Name is required.\n";
    isValid = false;
  }
  if (!email || !validateEmail(email)) {
    // checks if its not empty or if the email pattern is false
    errorMessage += "A valid Email is required.\n";
    // no input then email will be false and will run the code the error message and will change the variable validatoin
    isValid = false;
  }
  if (!phone || !validatePhone(phone)) {
    // checks if its not empty or if the phone pattern is false
    errorMessage += "A valid Phone Number is required.\n";
    // no input then phone will be false and will run the code the error message and will change the variable validatoin
    isValid = false;
  }
  if (!comments) {
    errorMessage += "Comments are required.\n";
    isValid = false;
    // no input then comments will be false and will run the code the error message and will change the variable validatoin
  }

  // Show error or success
  if (!isValid) {
    alert(errorMessage);
    // creates an alert with error message
  } else {
    alert("Form submitted successfully!");
    // if true then will create alert with sucess message
  }
});

// Helper function to validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // creates pattern to check pattern of email
  return regex.test(email);
  // checks if the value has the pattern that is set will return true or false
}

// Helper function to validate phone number (example: 10-digit numbers)
function validatePhone(phone) {
  const regex = /^[0-9]{10}$/;
  // creates pattern to check pattern of phone
  return regex.test(phone);
  // checks if the value has the pattern that is set will return true or false
}
// Thank you for checking my work
