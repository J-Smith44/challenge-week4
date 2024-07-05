// import functions from logic.js
//import { updateLocalStorage } from './logic.js';

//updateLocalStorage(); // This will call the function from logic.js

// TODO: Create a variable that selects the form element
const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitButton = document.querySelector("#submit");

// TODO: Create a function that handles the form submission.
// Grab the form data and store it in local storage, then
//redirect to the blog page using the redirectPage function.
//If the form is submitted with missing data, display an error
// message to the user.

let redirectURL = "";
console.log("location: ", location);

const redirectPage = function (url) {
  console.log("url: ", url);
  console.log("location-before: ", location);
  redirectURL = url;
  console.log("location-after: ", location);
  location.assign(url);
};

// TODO: Add an event listener to the form on submit.
// Call the function to handle the form submission.

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // create user object from submission
  //When the button is clicked, we store the current
  //values of the form in an object.
  //We use the string method trim() to eliminate any whitespace
  // and leave only the text
  const blogPost =
    {
      username: usernameInput.value.trim(),
      title: titleInput.value.trim(),
      content: contentInput.value.trim(),
    };

  // set new submission to local storage
  //We use the JSON method JSON.stringify() to turn the object into a string
  //We use setItem() to store the stringified object with localStorage
  if (username.value !== "" && title.value !== "" && content.value !== "") {
    //localStorage.setItem('blogPost', JSON.stringify(blogPost));
    updateLocalStorage(blogPost); // This will call the function from logic.js
    redirectPage("/blog.html");
  } else {
    alert("Please complete the form.");
  }
});
