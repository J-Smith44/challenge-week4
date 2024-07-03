// TODO: Create a variable that selects the form element
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

// TODO: Create a function that handles the form submission.
// Grab the form data and store it in local storage, then
//redirect to the blog page using the redirectPage function.
//If the form is submitted with missing data, display an error
// message to the user.



let redirectURL = '';
console.log('location: ', location)

const redirectPage = function (url) {
  console.log("url: ",url)
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit.
// Call the function to handle the form submission.

submitButton.addEventListener('click', function (event) {
//event.preventDefault();

  // create user object from submission
  //When the button is clicked, we store the current
  //values of the form in an object.
  //We use the string method trim() to eliminate any whitespace
  // and leave only the text
  const blogPost = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),

  };

  if (username && title && content) {
 // set new submission to local storage
  //We use the JSON method JSON.stringify() to turn the object into a string
  //We use setItem() to store the stringified object with localStorage
  localStorage.setItem('blogPost', JSON.stringify(blogPost));
    redirectPage("file:///C:/Users/Jeffe/bootcamp/challenge-week4/blog.html?");
} else{
     alert('Please complete the form.');
  }


});
