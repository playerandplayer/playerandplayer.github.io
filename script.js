// Define an object to store username-password pairs
var users = {
    "admin": "password",
    "user1": "password1",
    "user2": "password2"
};

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if the entered username exists in the users object
    if(users.hasOwnProperty(username)) {
        // If the username exists, check if the entered password matches
        if(users[username] === password) {
            alert("Login successful!");
            // Redirect to another page or perform any desired action
        } else {
            alert("Invalid password. Please try again.");
        }
    } else {
        alert("Username not found. Please try again.");
    }
});
