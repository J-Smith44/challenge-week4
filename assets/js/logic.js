// TODO: Create logic to toggle the light/dark mode styles for the
// page and circle. The mode should be saved to local storage.

// Access toggle switch HTML element
//We add the addEventListener() method to listen for an event on the themeSwitcher element, as follows:
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const span = document.querySelector('#emoji');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
//The addEventListener() method takes two parameters. The first is the type of event, which we set to click—as shown in the following example—because we want something to happen when a user clicks on the themeSwitcher element:
//The second parameter is the action that we want performed when a user clicks—that is, a function, as shown in the following example:
themeSwitcher.addEventListener('click', function () {
  // console.log(event);
  // If mode is dark, apply light background
  //Inside the function, we write the code that we want executed every time the event happens. We use setAttribute() to change the background to a light color if the background is in dark mode
  if (mode === 'dark') {
    mode = 'light';

    container.setAttribute('class', 'light');

    span.textContent = '🌒';

  }
  // If mode is light, apply dark background
  //Else, when a user clicks, we set the background to a dark mode by setting the dark class
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});


// TODO: Create functions to read and write from local storage

function updateLocalStorage(blogPost){
    localStorage.setItem('blogPost', JSON.stringify(blogPost));
}
