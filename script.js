// ************ list Projects ********* //
var projectsArray = [];

function Project(id, name, description, link, refactored) {    // constructor function for Projects
  this.id = id;
  this.name = name;
  this.description = description;
  this.link = link;
  this.refactored = refactored;
}
var ucimoTech = new Project(
  0,
  "ucimoTech",
  "you know what i did (last winter)",
  "https://www.ucimo.tech/",
  false
);
var ucimoTechApp = new Project(
  1,
  "ucimoTechApp",
  "stuff i <span>also</span> did",
  "https://app.ucimo.tech/login",
  false
);
var noleTributePage = new Project(
  2,
  "Nole tribut page",
  "describing project not sure what i am going to do when i have bunch of lines of text, problem solved by using tidy JS :D",
  "https://codepen.io/Ladly/pen/Zyqjdm",
  false
);
var myPortfolio = new Project(
  3,
  "My portfolio",
  "One more task from freeCodeCamp.com",
  "https://codepen.io/Ladly/pen/GEwJgG",
  false
);
var randomQuoteMachine = new Project(
  4,
  "Random quote machine",
  "description of <h2>rqm</h2>- because acronims rocks in programming",
  "https://codepen.io/Ladly/pen/dzYPQy",
  false
);
var weatherApp = new Project(
  5,
  "Weather App",
  "one of my favorite projects by freeCodeCamp",
  "https://codepen.io/Ladly/pen/WEGqQj",
  false
);
var wikipediaViewer = new Project(
  6,
  "Wikipedia viewer",
  "some description",
  "https://codepen.io/Ladly/pen/xLqbpx",
  false
);
var twitchStreamers = new Project(
  7,
  "Twitch streamers",
  "this one also have some description",
  "https://codepen.io/Ladly/pen/QMBpEd",
  false
);
var myPortfolio1 = new Project(
  8,
  "My portfolio #1",
  "Removed jquery and migrating to plain JS. Also switch to dynamic adding projects to list.",
  "https://codepen.io/Ladly/pen/mMzqOB",
  true
);
var simplePagination = new Project(
  9,
  "Simple pagination",
  "Created my first library function for simple pagination. It uses array of objects and number of items to be dispay per page. <br /> This function is mosly made for displaying wikipedia viewer using pagination but it can be used in many other situations, also it need some 'minor' fixes and it will be fixed in next refactoring ",
  "https://codepen.io/Ladly/pen/PKgJoR?editors=1010",
  false
);
var weatherApp1 = new Project(
  10,
  'Weather App #1',
  'Well, real refactoring. Same results much easier solution.Basic project is more spaghetti. This way is more object oriented and code is much cleaner and understandable. <br>Also removed two buttons for changing from celsius to farenheit and vice versa and now i use one button',
  'https://codepen.io/Ladly/pen/dzBoMX',
  true
)


projectsArray.push(        // adding projects to array
  ucimoTech,
  ucimoTechApp,
  noleTributePage,
  myPortfolio,
  randomQuoteMachine,
  weatherApp,
  wikipediaViewer,
  twitchStreamers,
  myPortfolio1,
  simplePagination,
  weatherApp1
);

function displayProject(arr) {             // function to display projects

  for (var i = 0; i < arr.length; i++) {
    var basic = document.getElementById("basic");
    var refactored = document.getElementById("refactored");
    var projectName = document.createElement("a");
    var projectNameText = document.createTextNode(arr[i].name);
    var descriptionButton = document.createElement("button");
    var description = document.createTextNode("Description");
    var listItem = document.createElement("li");
    
    descriptionButton.setAttribute("id", i);    
    descriptionButton.append(description);    
    descriptionButton.addEventListener("click", function() {
      var jobDescription = document.getElementById("job-description");
      var buttonId = this.id;
      jobDescription.innerHTML = arr[this.id].description;
    });
    
    projectName.append(projectNameText);
    projectName.href = arr[i].link;
    projectName.target = "_blank";
    
    listItem.append(projectName, descriptionButton);
    if (arr[i].refactored === false) {
      basic.append(listItem);
    } else {
      refactored.append(listItem);
    }
  }
}
window.onload = displayProject(projectsArray);

//********* scroll ******* // //**** stolen from web :D ***** //
var scrollY = 0;
var distance = 40;
var speed = 20;

function autoScrollTo(el) {         
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(el).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var yPos = currentY + window.innerHeight;
  var animator = setTimeout("autoScrollTo('" + el + "')", speed);
  if (yPos > bodyHeight) {
    clearTimeout(animator);
  } else {
    if (currentY < targetY - distance) {
      scrollY = currentY + distance;
      window.scroll(0, scrollY);
    } else {
      clearTimeout(animator);
    }
  }
}

function resetScroller(el) {
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(el).offsetTop;
  var animator = setTimeout("resetScroller('" + el + "')", speed);
  if (currentY > targetY) {
    scrollY = currentY - distance;
    window.scroll(0, scrollY);
  } else {
    clearTimeout(animator);
  }
}

//************* cool but unnesessery ******** //

//  this was unnecessary but too cool for deleting :D
  // var creatingJSON = arr.map(function(arr) {
  //   var obj = {
  //     name: arr.name,
  //     description: arr.description,
  //     link: arr.link,
  //     refactored: arr.refactored
  //   };
  //   return obj;
  // });

// went other way around but also too cool to be deleted
// Project.prototype.describeIt = function() {
//   jobDescription.innerHTML = this.description;
// };
// wikipediaViewer.describeIt();

