// TODO: Create a variable that selects the main element
const mainEl = document.querySelector("main");
const backButton = document.querySelector("#back");
const themeSwitcher2 = document.querySelector('#theme-switcher2');

let blogs = [];

// Set default mode to dark
let mode2 = 'dark';

// TODO: Create a function that builds an
//element and appends it to the DOM

function renderBlogs() {
  mainEl.innerHTML = "";
  let hold = blogs.length;

  // TODO: Describe the functionality of the following `for` loop.
  // creates a new li item and adds each new todo item to the screen
  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];

    const h2 = document.createElement("h2");
    h2.textContent = "Title: " + blog.title;
    //li.setAttribute('data-index', i);

    const p = document.createElement("p");
    p.textContent = " Content: " + blog.content;

    const p2 = document.createElement("p");
    p2.textContent = "Username: " + blog.username;

    mainEl.appendChild(h2);
    mainEl.appendChild(p);
    mainEl.appendChild(p2);
  }
}

// TODO: Create a function that handles the case where
//there are no blog posts to display
function handleEmpty() {
  alert("No Blog posts yet...");
}
// TODO: Create a function that reads from local storage
//and returns the data

function init() {
  // TODO: What is the purpose of the following line of code?
  //turn data from local storage from a string back into an object
  const blogData = JSON.parse(localStorage.getItem("blogPost"));
  console.log("blogData--:", blogData);
  // TODO: Describe the functionality of the following `if` statement.
  //if not empty, store data into the todo variable
  if (blogData !== null) {
    blogs = blogData;
    console.log("blog---:", blogs);
  } else {
    handleEmpty();
  }
  // TODO: Call the function to render the list of blog posts
  renderBlogs();
}

let redirectURL = "";
console.log("location: ", location);

const redirectPage = function (url) {
  console.log("url: ", url);
  console.log("location-before: ", location);
  redirectURL = url;
  console.log("location-after: ", location);
  location.assign(url);
};

themeSwitcher2.addEventListener('click', function () {
  // console.log(event);
  // If mode is dark, apply light background
  //Inside the function, we write the code that we want executed every time the event happens. We use setAttribute() to change the background to a light color if the background is in dark mode
  if (mode2 === 'dark') {
    mode2 = 'light';

    container.setAttribute('class', 'light');

    span.textContent = '🌒';

    //aside.style.background = 'linear-gradient(#f9f9fb, #563d7c, #222)';
    //aside.style.background = 'linear-gradient(#f9f9fb, #ffb100, #222)';
  }
  // If mode is light, apply dark background
  //Else, when a user clicks, we set the background to a dark mode by setting the dark class
  else {
    mode2 = 'dark';
    container.setAttribute('class', 'dark');
    span.textContent = '☀️';

    //aside.style.background = 'linear-gradient(f9f9fb, #ffb100, #222)';
   // aside.style.background = 'linear-gradient(f9f9fb, #ffb100, #222)';
   //aside.style.background = 'linear-gradient(#f9f9fb, #563d7c, #222)';

  }
});

backButton.addEventListener("click", function (event) {
event.preventDefault();
redirectPage("/index.html");
});

init();
