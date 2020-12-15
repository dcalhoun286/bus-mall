'use strict';

// global variables
// all ads array
var allAds = [];
// I can easily adjust my max with this variable
var maxClicksAllowed = 25;
var actualClicks = 0;

// get some ids from the DOM
var myContainer = document.getElementById('container');
var imageOneElement = document.createElement('image-one');
var imageTwoElement = document.createElement('image-two');
var imageThreeElement = document.createElement('image-three');
var resultsList = document.getElementById('results');

// ad constructor
// properties - src name alt title views clicks
function Ad(name, src = 'jpg') {
  this.name = name;
  this.src = `/img/${name}.${src}`;
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
// documentation: used getRandomInt from MDN docs
function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// with two - we need validation - is goat unique?
// assign a src, alt, and title to image
function renderAds(){
  var adOneIndex = getRandomIndex(allAds.length);
  var adTwoIndex = getRandomIndex(allAds.length);
  var adThreeIndex = getRandomIndex(allAds.length);

  // validation
  while (adOneIndex === adTwoIndex) {
    adTwoIndex = getRandomIndex(allAds.length);
  }

  while (adOneIndex === adThreeIndex) {
    adThreeIndex = getRandomIndex(allAds.length);
  }

  while (adTwoIndex === adThreeIndex) {
    adThreeIndex = getRandomIndex(allAds.length);
  }

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

  // validation for when we hit our max clicks
  if (actualClicks === maxClicksAllowed) {
    // WHEN WE HIT OUR MAX CLICKS:
    // #1 remove eventlistener
    myContainer.removeEventListener('click', handleClick);
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
// event listner attached to the container
myContainer.addEventListener('click', handleClick);
