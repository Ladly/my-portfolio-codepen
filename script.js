// ************ list Projects ********* //
var projects = [];
var images = [];

var avatarHolder = document.getElementById("avatar-holder");
var image = document.createElement("img");

function Image(id, name, src, alt) {
  //constructor for images
  this.id = id;
  this.name = name;
  this.src = src;
  this.alt = alt;
}

var avatar = new Image(
  1,
  "avatar",
  "http://i67.tinypic.com/10rjymp.jpg",
  "my avatar"
);

function Project(id, name, description, link, refactored) {
  // constructor function for Projects
  this.id = id;
  this.name = name;
  this.description = description;
  this.link = link;
  this.refactored = refactored;
}

var ucimoTech = new Project(
  0,
  "ucimoTech",
  "Landing page of ucimoTechApp. Display of an idea of site I made with my friends.",
  "https://ucimo.me/",
  false
);
var ucimoTechApp = new Project(
  1,
  "ucimoTechApp",
  "First project I participated in. The project I learn what am i going to learn and how programming actually works, where i learn source control and task menagment. <br> Done using <span class='important-to-notice'>react, redux, saga, node.js and mysql</span>. Also used bootstrap since we didnt have designer :D. We also used phabricator and git. My tasks on this project ranged from creating mysql queries and api to displaying wanted results and putting client data to database. Should I mention api in previous sentence? Project is atm on stand by",
  "https://app.ucimo.tech/login",
  false
);
var noleTributePage = new Project(
  2,
  "Nole tribut page",
  "Well first task on freeCodeCamp. Nothing special here bit html, css, bootstrap, image",
  "https://codepen.io/Ladly/pen/Zyqjdm",
  false
);

var myPortfolio = new Project(
  3,
  "My portfolio",
  "First version of my portfolio. Bit messy. Jquery, bootstrap, html, css",
  "https://codepen.io/Ladly/pen/GEwJgG",
  false
);
var randomQuoteMachine = new Project(
  4,
  "Random quote machine",
  "My 'first' api task from freeCodeCamp. Simple with a <span class='important-to-notice'>few huge</span> designing mistakes, but i like idea of displaying previous quotes. Unfortunately dont have time to fix mistakes but I will do it eventually",
  "https://codepen.io/Ladly/pen/dzYPQy",
  false
);
var weatherApp = new Project(
  5,
  "Weather App",
  "One of my favorite projects by freeCodeCamp. First version. Spaghetti code. Good test for seniors- if they understand what i wanted to write they can mentor someone :D",
  "https://codepen.io/Ladly/pen/WEGqQj",
  false
);
var wikipediaViewer = new Project(
  6,
  "Wikipedia viewer",
  "I dont like this one. But i learn a lot with it. Should have been upgraded with my pagination, but I mess it up. Will wait a bit for new version",
  "https://codepen.io/Ladly/pen/xLqbpx",
  false
);
var twitchStreamers = new Project(
  7,
  "Twitch streamers",
  "Some times work- sometimes not. Checked on others pens noticed the same result. Btw task is from freeCodeCamp",
  "https://codepen.io/Ladly/pen/QMBpEd",
  false
);
var myPortfolio1 = new Project(
  8,
  "My portfolio #1",
  "Removed jquery and migrating to plain JS. Also switch to dynamic adding projects to list and added displaying description.",
  "https://codepen.io/Ladly/pen/mMzqOB",
  true
);
var simplePagination = new Project(
  9,
  "Simple pagination",
  "Created my first library function for simple pagination. It uses array of objects and number of items to be dispay per page. <br > This function is mosly made for displaying wikipedia viewer using pagination but it can be used in many other situations, also it need some 'minor' fixes and it will be fixed in next refactoring",
  "https://codepen.io/Ladly/pen/PKgJoR?editors=1010",
  false
);
var weatherApp1 = new Project(
  10,
  "Weather App #1",
  "Well, real refactoring. Same results much easier solution.Basic project is more spaghetti. This way is more object oriented and code is much cleaner and understandable. <br>Also removed two buttons for changing from celsius to farenheit and vice versa and now i use one button",
  "https://codepen.io/Ladly/pen/dzBoMX",
  true
);
var myPortfolio2 = new Project(
  11,
  "My portfolio #2",
  "<ul><li>Switched to flexbox</li><li>Restyle it a bit</li>Made it bit more responsive<li>Added some css animations</li></ul><br> TODO: <br>-Change bootstrap slider to js,<br> -Make navbar collapse and always on top,<br> -Add more css animations",
  "https://codepen.io/Ladly/pen/gxVVEp",
  true
);
var weatherApp2 = new Project(
  12,
  "Weather App #2",
  "<ul><li>Added option to find city by coordinates></li><li>Added option to make few city you can check weather conditions using localStorage</li><ul> TODO: -change backgrounds images (some are short) <br> -add option to find weather temperature for few cities <br> -do some testing for god sake <br> -add some form inputs restrictions",
  "https://codepen.io/Ladly/pen/NaPywr",
  true
);

var memoryGame = new Project(
  13,
  "Memory game",
  'This is simple memory game which I make for displaying my skills with <span class="important-to-notice">source control</span> and <span class="important-to-notice">task menagment</span>. For source control I used <a href="https://bitbucket.org/Ladly/memory-game/overview" target="_blank">bitBucket</a> and for task menagment I used <a href="https://trello.com/b/kPatWdG6/memory-game" target="_blank">trello</a>',
  "https://bitbucket.org/Ladly/memory-game/overview",
  false
);
 
var customCarousel = new Project(
   14,
  'Custom carousel',
  'Created simple slider for images. Since boootstrap carousel have a lot of html and i dont really like it i create my own which is more "javascripty" and easy to custom. Basicly i needed it my portfolio and since it is easy to custom and to use it is perfect candidate for library (Which will be created soon) :D',
  'https://codepen.io/Ladly/pen/boEMpR', 
  false, 
)

var myPortfolio3 = new Project(
  15,
  'My Portfolio #3',
  'You are currently on this one.<br><p>Have few huge flaws, which will be fixed in next refactoring</p><br><p>Work in progress: <ul><li class="important-to-notice">Make it responsive</li><li>Switch to scss</li><li>Fix click scrolling issue</li><li>Add library (not just h3 to hang on page), add option in code and append it</li><li>Make code well readable (delete whole spaghetti code and write new one with comments and consistent use of quotes)</li><li>Talk to someone about design this is quite ugly</li><li>Consider swiching to some kind of source controll because this is really harsh to follow</li><li>Also will add some kind of sort like importance so it is easier to follow</li><li>And for god sake change avatar and change images to https server so I dont get warrning in console.(postponed last 2 times)</li></ul></p>',
  'https://codepen.io/Ladly/pen/MERNpg',
  true
)

var customCarousel1 = new Project(
  16,
  'Custom carousel #1',
  '<p>Changes:</p><br><ul><li>Made it more responsive</li><li>fix some minor functionality issues</li><li>switch to font awesome button instead of my own custom carousel navigation buttons</li></ul><p>Note: this will need one more refactoring so it can really be called library but for now i will use it like this</p>',
  'https://codepen.io/Ladly/pen/pWmBLX',
  true
)

var skillChart = new Project(
  17,
  'Skill chart (canvas)',
  '<p>Created it to use on my portolio page</p><p>The idea is to graphicly display my skills and like level</p>',
  'https://codepen.io/Ladly/pen/OOVyEr',
  false
 )
var skillChart1 = new Project(
  18,
  'Skill chart (canvas) #1',
  '<p>Added some animation in it.</p><br><p>Have to add some legend and also to optimise it</p><br><p>Note: in meantime I increase my skill in responsivenes</p>',
  'https://codepen.io/Ladly/pen/pdJWOO',
  true
 )

projects.push(               // adding projects to array
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
  weatherApp1,
  myPortfolio2,
  weatherApp2,
  memoryGame,
  customCarousel,
  myPortfolio3,
  customCarousel1,
  skillChart,
  skillChart1
);

image.src = avatar.src;
image.setAttribute("id", avatar.name);
image.setAttribute("alt", avatar.alt);
avatarHolder.append(image);

function displayProject(arr) {
  // function to display projects

  for (var i = 0; i < arr.length; i++) {
    var basic = document.getElementById("basic");
    var refactored = document.getElementById("refactored");
    var projectName = document.createElement("a");
    var projectNameText = document.createTextNode(arr[i].name);
    var descriptionButton = document.createElement("button");
    var description = document.createTextNode("Description");
    var listItem = document.createElement("li");
    var icon = document.createElement("i");
    icon.setAttribute("class", "fa fa-link");
    icon.setAttribute("aria-hidden", "true");

    descriptionButton.setAttribute("id", i);
    descriptionButton.setAttribute("class", "btn - btn-primary");
    descriptionButton.append(description);
    descriptionButton.style.margin = "5px";
    descriptionButton.style.fontSize = "10px";
    descriptionButton.style.background = "grey";
    descriptionButton.style.border = "1px solid black";

    descriptionButton.addEventListener("click", function() {
      var jobDescription = document.getElementById("job-description");
      var buttonId = this.id;
      jobDescription.innerHTML = arr[this.id].description;
    });
  
    projectName.append(projectNameText, icon);
    projectName.href = arr[i].link;
    projectName.target = "_blank";
    
    if(i === 15) {    // here will be something other than hardcode to display page you are on  
    projectName.style.color = 'red'
  }
    listItem.append(projectName, descriptionButton);
    if (arr[i].refactored === false) {
      basic.append(listItem);
    } else {
      refactored.append(listItem);
    }
  }
}

window.onload = displayProject(projects);

// **************** Scroll ***************//
var marginY = 0;
var destination = 0;
var speed = 10;
var scroller = null;

function initScroll(elementId) {
  destination = document.getElementById(elementId).offsetTop;

  scroller = setTimeout(function() {
    initScroll(elementId);
  }, 1);
  marginY = marginY + speed;

  if (marginY >= destination) {
    clearTimeout(scroller);
  }
  window.scroll(0, marginY);
}

function onTop() {
  scroller = setTimeout(function() {
    onTop();
  }, 1);
  marginY = marginY - speed;
  if (marginY <= 0) {
    clearTimeout(scroller);
  }
  window.scroll(0, marginY);
}

// Carousel

var displayImages = document.getElementById("display-images");
var previous = document.getElementById("prev");
var next = document.getElementById("next");

var Image = function(id, src, alt, height) {
  this.id = id;
  this.src = src;
  this.alt = alt;
  this.height = "300px"; // all images same height
};

var jsCertificate = new Image(
  1,
  "http://i63.tinypic.com/5uqwet.jpg",
  "Javascript certificate"
);
var htmlCertificate = new Image(
  2,
  "http://i67.tinypic.com/t819xg.jpg",
  "html certificate"
);
var cssCertificate = new Image(
  3,
  "http://i65.tinypic.com/nffklk.jpg",
  "css certificate"
);
var jqueryCertificate = new Image(
  4,
  "http://i66.tinypic.com/2qx9swi.jpg",
  "jquery certificate"
);
var codecademy = new Image(
  5,
  "http://i64.tinypic.com/20p3qk4.jpg",
  "codecademy"
);

images.push(
  jsCertificate,
  htmlCertificate,
  cssCertificate,
  jqueryCertificate,
  codecademy
);

var imageCounter = 0;

function slideIt(counter, arr) {
  function followUpImage(counter, arr) {
    var slideImageSrc = arr[counter].src;
    var slideImageAlt = arr[counter].alt;
    var slideImageHeight = arr[counter].height;
    displayImages.innerHTML =
      "<img src=" +
      slideImageSrc +
      " alt=" +
      slideImageAlt +
      " style=height:" +
      slideImageHeight +
      " />";

    counter === arr.length - 1
      ? (next.style.display = "none")
      : (next.style.display = "block");
    counter === 0
      ? (previous.style.display = "none")
      : (previous.style.display = "block");
  }

  followUpImage(counter, arr);

  next.addEventListener("click", function() {
    counter++;
    followUpImage(counter, arr);
  });

  previous.addEventListener("click", function() {
    counter--;
    followUpImage(counter, arr);
  });
}

slideIt(imageCounter, images);


// //********* scroll ******* // //**** stolen from web :D ***** //
// var scrollY = 0;
// var distance = 40;
// var speed = 20;

// function autoScrollTo(el) {
//   var currentY = window.pageYOffset;
//   var targetY = document.getElementById(el).offsetTop;
//   var bodyHeight = document.body.offsetHeight;
//   var yPos = currentY + window.innerHeight;
//   var animator = setTimeout("autoScrollTo('" + el + "')", speed);
//   if (yPos > bodyHeight) {
//     clearTimeout(animator);
//   } else {
//     if (currentY < targetY - distance) {
//       scrollY = currentY + distance;
//       window.scroll(0, scrollY);
//     } else {
//       clearTimeout(animator);
//     }
//   }
// }

// function resetScroller(el) {
//   var currentY = window.pageYOffset;
//   var targetY = document.getElementById(el).offsetTop;
//   var animator = setTimeout("resetScroller('" + el + "')", speed);
//   if (currentY > targetY) {
//     scrollY = currentY - distance;
//     window.scroll(0, scrollY);
//   } else {
//     clearTimeout(animator);
//   }
// }

// //************* cool but unnesessery ******** //

// //  this was unnecessary but too cool for deleting :D
//   // var creatingJSON = arr.map(function(arr) {
//   //   var obj = {
//   //     name: arr.name,
//   //     description: arr.description,
//   //     link: arr.link,
//   //     refactored: arr.refactored
//   //   };
//   //   return obj;
//   // });

// // went other way around but also too cool to be deleted
// // Project.prototype.describeIt = function() {
// //   jobDescription.innerHTML = this.description;
// // };
// // wikipediaViewer.describeIt();

/*********** Parallax **********/

// $(document).ready(function(){
//   var yOffset;
//   $(window).scroll(function(){
//       yOffset=$(window).scrollTop()*1;
//       $("body").css('background-position', '0px '+-yOffset+'px');
//       })
// })
