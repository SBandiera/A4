//display greeting on page load

window.onload = function() {
  alert("Welcome to the Yours Ore Mine Corporation- Newsletter Signup");
};

//function to check if one or more "name" field is empty

function validateForm(form) {
  var firstName, lastName;
  firstName = form["first-name"].value;
  lastName = form["last-name"].value;
  
  if (firstName === "" || lastName === "") {
    alert("Error: One or more 'name' fields missing.");
    return false; // prevent form submission if one or more name fields is empty
  }
  else {
    alert("Thankyou for signing up to our newsletter!");
    return true; // allows form submission if name fields are not empty
  }
}