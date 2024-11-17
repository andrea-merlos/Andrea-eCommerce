document.getElementById("button").addEventListener("click", function (event) {
  // Prevent form submission
  event.preventDefault();

  // Get form values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const comments = document.querySelector("textarea").value.trim();

  // Validation checks
  let isValid = true;
  let errorMessage = "";

  if (!firstName) {
    errorMessage += "First Name is required.\n";
    isValid = false;
  }
  if (!lastName) {
    errorMessage += "Last Name is required.\n";
    isValid = false;
  }
  if (!email || !validateEmail(email)) {
    errorMessage += "A valid Email is required.\n";
    isValid = false;
  }
  if (!phone || !validatePhone(phone)) {
    errorMessage += "A valid Phone Number is required.\n";
    isValid = false;
  }
  if (!comments) {
    errorMessage += "Comments are required.\n";
    isValid = false;
  }

  // Show error or success
  if (!isValid) {
    alert(errorMessage);
  } else {
    alert("Form submitted successfully!");
  }
});

// Helper function to validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Helper function to validate phone number (example: 10-digit numbers)
function validatePhone(phone) {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
}
// Thank you for checking my work
