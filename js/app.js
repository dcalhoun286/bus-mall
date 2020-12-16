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
var resultsList = document.getElementById('results');

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

// instantiations
var bag = new Ad('bag');
var banana = new Ad('banana');
var bathroom = new Ad('bathroom');
var boots = new Ad('boots');
var breakfast = new Ad('breakfast');
var bubblegum = new Ad('bubblegum');
var chair = new Ad('chair');
var cthulhu = new Ad('cthulhu');
var dogduck = new Ad('dog-duck');
var dragon = new Ad('dragon');
var pen = new Ad('pen');
var petsweep = new Ad('pet-sweep');
var scissors = new Ad('scissors');
var shark = new Ad('shark');
var sweep = new Ad('sweep', 'png');
var tauntaun = new Ad('tauntaun');
var unicorn = new Ad('unicorn');
var usb = new Ad('usb', 'gif');
var watercan = new Ad('water-can');
var wineglass = new Ad('wine-glass');

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

  var adOneIndex = renderQueue.shift();
  var adTwoIndex = renderQueue.shift();
  var adThreeIndex = renderQueue.shift();


  /* The commented out code below is corpse code, but it was an example I was shown that I want to keep for review on how to render my photos in a different way */

  // queue: any of the first three images in the array don't match any of the last three
  // arr.pop

  // this array should have max length of three
  // var previousUsed = [];
  // var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // previousUsed.push(adOneIndex);
  // console.log(previousUsed.push(adOneIndex));
  // previousUsed.push(adTwoIndex);
  // console.log(previousUsed.push(adTwoIndex));
  // previousUsed.push(adThreeIndex);
  // console.log(previousUsed.push(adThreeIndex));
  // after the first three above are done, set them into previousUsed so they can be stored


  // previousUsed[0] = index[0] -- can do for all three indexes

  // while((index[0] === index[1] && !previousUsed.includes(index[1])){
  // previousUsed.unshift(newRandomNumber) // add the new index
  // previousUsed.pop(); // take off last index
  // }

  imageOneElement.src = allAds[adOneIndex].src;
  imageOneElement.alt = allAds[adOneIndex].name;
  imageOneElement.title = allAds[adOneIndex].name;
  allAds[adOneIndex].views++;
  allAds[adOneIndex].votes++;
  console.log(allAds[adOneIndex]);

  imageTwoElement.src = allAds[adTwoIndex].src;
  imageTwoElement.alt = allAds[adTwoIndex].name;
  imageTwoElement.title = allAds[adTwoIndex].name;
  allAds[adTwoIndex].views++;
  allAds[adTwoIndex].votes++;
  console.log(allAds[adTwoIndex]);

  imageThreeElement.src = allAds[adThreeIndex].src;
  imageThreeElement.alt = allAds[adThreeIndex].name;
  imageThreeElement.title = allAds[adThreeIndex].name;
  allAds[adThreeIndex].views++;
  allAds[adThreeIndex].votes++;
  console.log(allAds[adThreeIndex]);
}
// log the view - views start at 0 and get incremented with every view

// example: allAds[1].views++;
// call a function that assigns the img srcs

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
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3
      }]
    },
    options: {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  // validation for when we hit our max clicks
  if (actualClicks === maxClicksAllowed) {
    // WHEN WE HIT OUR MAX CLICKS:
    // #1 remove eventlistener
    myContainer.removeEventListener('click', handleClick);

    // ***!!! Maybe reference the CSS for when button is clicked that will activate the list being rendered to the DOM !!!***

    // #2 show results - render list with string including name, views, and votes
    for (var j = 0; j < allAds.length; j++) {
      // create element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent = `${allAds[j].name} was viewed ${allAds[j].views} times and clicked ${allAds[j].votes} times`;
      //append it to the DOM
      resultsList.appendChild(liElement);
    }
  }
}

// executable code
renderAds();

// chart info needed:
// 1. array of names
// 2. array of votes/clicks
// 3. array of views

function renderChart() {
  var namesArray = [];
  var votesArray = [];
  var viewsArray = [];

  for (var i = 0; i < allAds.length; i++) {
    namesArray.push(allAds[i].name);
    votesArray.push(allAds[i].votes);
    viewsArray.push(allAds[i].views);
  }

  console.log(`namesArray: ${namesArray}
  votesArray: ${votesArray}
  viewsArray: ${viewsArray}`);

}

// event listner attached to the container ... this might be inside the renderChart() function
myContainer.addEventListener('click', handleClick);