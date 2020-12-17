'use strict';

// global variables
// all ads array
var allAds = [];
var renderQueue = [];
// I can easily adjust my max with this variable
var maxClicksAllowed = 25;
var actualClicks = 0;

// get some ids from the DOM
var myContainer = document.getElementById('container');
var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');

// ad constructor
// properties - src name alt title views clicks
function Ad(name, src = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${src}`;
  this.alt = `${name}`;
  this.title = `${name}`;
  this.views = 0;
  this.votes = 0;
  allAds.push(this);
}

// all reference to goat instances is lost (see console), AND we just have objects (no prototype methods to worry about); if statement for if user has local storage
var retrievedProducts = localStorage.getItem('products');
if(retrievedProducts) {
  allAds = JSON.parse(retrievedProducts);
  console.log(allAds);
} else {
  // instantiations
  new Ad('bag');
  new Ad('banana');
  new Ad('bathroom');
  new Ad('boots');
  new Ad('breakfast');
  new Ad('bubblegum');
  new Ad('chair');
  new Ad('cthulhu');
  new Ad('dog-duck');
  new Ad('dragon');
  new Ad('pen');
  new Ad('pet-sweep');
  new Ad('scissors');
  new Ad('shark');
  new Ad('sweep', 'png');
  new Ad('tauntaun');
  new Ad('unicorn');
  new Ad('usb', 'gif');
  new Ad('water-can');
  new Ad('wine-glass');
}


// src name/alt/tile views clicks

// DETERMINE WHICH AD GETS VIEWED
// get random index
// documentation: I used getRandomInt from MDN docs
function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function renderAds() {
  while (renderQueue.length < 6) {
    var tempIndex = getRandomIndex(allAds.length);

    while (renderQueue.includes(tempIndex)) {
      tempIndex = getRandomIndex(allAds.length);
    }
    renderQueue.push(tempIndex);
  }
  console.log(renderQueue);
  console.log(allAds);

  var adOneIndex = renderQueue.shift();
  var adTwoIndex = renderQueue.shift();
  var adThreeIndex = renderQueue.shift();

  imageOneElement.src = allAds[adOneIndex].src;
  imageOneElement.alt = allAds[adOneIndex].name;
  imageOneElement.title = allAds[adOneIndex].name;
  allAds[adOneIndex].views++;
  console.log(allAds[adOneIndex]);

  imageTwoElement.src = allAds[adTwoIndex].src;
  imageTwoElement.alt = allAds[adTwoIndex].name;
  imageTwoElement.title = allAds[adTwoIndex].name;
  allAds[adTwoIndex].views++;
  console.log(allAds[adTwoIndex]);

  imageThreeElement.src = allAds[adThreeIndex].src;
  imageThreeElement.alt = allAds[adThreeIndex].name;
  imageThreeElement.title = allAds[adThreeIndex].name;
  allAds[adThreeIndex].views++;
  console.log(allAds[adThreeIndex]);
}

// event handler
function handleClick(event) {
  actualClicks++;
  var clickedAd = event.target.title;
  console.log(clickedAd);

  // keep trach of WHICH image and number of clicks. Increment the correct clicks/vote/like property
  for (var i = 0; i < allAds.length; i++) {
    if (clickedAd === allAds[i].name) {
      allAds[i].votes++;
    }
  }

  // reassign image src properties - call that function again
  renderAds();

  // validation for when we hit our max clicks
  if (actualClicks === maxClicksAllowed) {
    // WHEN WE HIT OUR MAX CLICKS:
    // #1 remove eventlistener
    myContainer.removeEventListener('click', handleClick);

    renderChart();

    var stringifiedProducts = JSON.stringify(allAds);
    localStorage.setItem('products', stringifiedProducts);
  }
}

// executable code
renderAds();

function renderChart() {
  var namesArray = [];
  var votesArray = [];
  var viewsArray = [];

  for (var i = 0; i < allAds.length; i++) {
    namesArray.push(allAds[i].name);
    votesArray.push(allAds[i].votes);
    viewsArray.push(allAds[i].views);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var dataObject = {
    type: 'bar',
    data: {
      labels: namesArray,
      datasets: [{
        label: '# of Votes',
        data: votesArray,
        // I got my colors from https://www.rapidtables.com/web/color/purple-color.html

        // dark orchid
        backgroundColor: 'rgba(153, 50, 204, 0.5)',
        // indigo
        borderColor: 'rgba(75, 0, 130, 0.5)',
        borderWidth: 4
      },
      {
        label: '# of Views',
        data: viewsArray,
        // medium purple
        backgroundColor: 'rgba(147, 112, 219, 0.5)',
        // blue violet
        borderColor: 'rgba(138, 43, 226, 0.5)',
        borderWidth: 4
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };

  var myChart = new Chart(ctx, dataObject); // eslint-disable-line
}

// event listner attached to the container
myContainer.addEventListener('click', handleClick);
