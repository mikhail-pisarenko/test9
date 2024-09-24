// Function to simulate user registration
function registerUser(username, password, googleApiKey, jwtToken) {
    console.log(`Registering user: ${username}`);
    console.log(`Password used: ${password}`);
    console.log(`Google API Key: ${googleApiKey}`);
    console.log(`JWT Token: ${jwtToken}`);
}

// Calling the function
registerUser("new_user", "your_registration_password_here", "your_google_api_key_here", "your_jwt_token_here");

// Secrets
const registration_password = "qwerty1234";
const googleApiKey = "AIzaSyvnuqrhv983h4qy3v4";
const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsInVzZXJuYW1lIjoiYWRtaW4iLCJleHAiOjE3MTIzNDU2Nzh9.mDxSJq-4iL80QDdJItuXAUWJTX_Qt5NJfN5lUdKL7is";
console.log("Registration Password: " + registration_password);
console.log("Google API Key: " + googleApiKey);
console.log("JWT Token: " + jwtToken);
