//////////////////////////////////////////Map

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 9.669300, lng: 80.018944 },
    zoom: 8,
  });
}

window.initMap = initMap;

///////////////////////////////////////////////////////name
// Define the regular expression pattern
const namePattern = /^[a-zA-Z]{1,15}$/;

// Get the input elements
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');

// Add an event listener to the form's submit button
document.getElementById('submitButton').addEventListener('click', function(event) {
  // Get the input values
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  // Check if the input values are valid
  if(namePattern.test(firstName) && namePattern.test(lastName)) {
    // Valid input values
    document.getElementById('demo').value=("Valid names");
  } else {
    // Invalid input values
    document.getElementById('demo2').value=("Invalid names");
    
    // Prevent the form from submitting
    event.preventDefault();
  }
});

////////////////////////////////////////////////////////login
function myfunc(){


  var name = document.getElementById("name").value;
  var  textarea= document.getElementById("textarea").value;

  var email = document.getElementById("email").value;
  var zipCode= document.getElementById("Zipcode").value;
  var phoneNumber =document.getElementById("Phone number").value;
  
  

  if (/^[a-zA-Z]{2,15}/.test(name)) {
      document.getElementById("none").innerHTML = " "
  } else {
      document.getElementById("none").innerHTML = "charecter should be 1 to 15";
    
  }
  if (/^[a-zA-Z]{2,120}/.test(textarea)) {
    document.getElementById("lasttext").innerHTML = " "
} else {
    document.getElementById("lasttext").innerHTML = "charecter between 2 and 120 characters";
  
}
  
  
  if (/[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim.test(email)) {
      document.getElementById("none1").innerHTML = " "
  } else {
      document.getElementById("none1").innerHTML = "invalid email";
  
  }
  if (/^[10000-90000]/.test(zipCode)) {
      document.getElementById("none2").innerHTML = " "
  } else {
      document.getElementById("none2").innerHTML = "invalid Zipcode";
  
  }
  
  if (/^\d{10}$/.test(phoneNumber)) {
      document.getElementById("none3").innerHTML = " "
  } else {
      document.getElementById("none3").innerHTML = "phone number should be 10.";
      return false;
  }
  
  
  };
  

 
  
  
  
  