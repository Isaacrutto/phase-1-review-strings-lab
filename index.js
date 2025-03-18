// Write your code in this file!
// Define the currentUser variable as a non-empty string
const currentUser = "JohnDoe"; // Change this to any non-empty string

// Define welcomeMessage using string interpolation
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define excitedWelcomeMessage with uppercase letters
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

// Define shortGreeting with only the first initial of currentUser
const shortGreeting = `Welcome, ${currentUser[0]}!`;

// Export the variables for testing (if needed in a module environment)
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting,
};
