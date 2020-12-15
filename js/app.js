'use strict';

// global variables
// all ads array
var allPhotos = [];
// I can easily adjust my max with this variable
var maxClicksAllowed = 25;
var actualClicks = 0;

// get some ids from the DOM
var myContainer = document.getElementById('container');
var imageOneElement = document.createElement('img');
var imageTwoElement = document.createElement('img');
var imageThreeElement = document.createElement('img');
var imageFourElement = document.createElement('img');
var imageFiveElement = document.createElement('img');
var imageSixElement = document.createElement('img');
var imageSevenElement = document.createElement('img');
var imageEightElement = document.createElement('img');
var imageNineElement = document.createElement('img');
var imageTenElement = document.createElement('img');
var imageElevenElement = document.createElement('img');
var imageTwelveElement = document.createElement('img');
var imageThirteenElement = document.createElement('img');
var imageFourteenElement = document.createElement('img');
var imageFifteenElement = document.createElement('img');
var imageSixteenElement = document.createElement('img');
var imageSeventeenElement = document.createElement('img');
var imageEighteenElement = document.createElement('img');
var imageNineteenElement = document.createElement('img');
var imageTwentyElement = document.createElement('img');
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
  allPhotos.push(this);
}

// instantiations
var bag = new Ad('bag');
console.log(bag);
var banana = new Ad('banana');
console.log(banana);
var bathroom = new Ad('bathroom');
console.log(bathroom);
var boots = new Ad('boots');
console.log(boots);
var breakfast = new Ad('breakfast');
console.log(breakfast);
var bubblegum = new Ad('bubblegum');
console.log(bubblegum);
var chair = new Ad('chair');
console.log(chair);
var cthulhu = new Ad('cthulhu');
console.log(cthulhu);
var dogduck = new Ad('dog-duck');
console.log(dogduck);
var dragon = new Ad('dragon');
console.log(dragon);
var pen = new Ad('pen');
console.log(pen);
var petsweep = new Ad('pet-sweep');
console.log(petsweep);
var scissors = new Ad('scissors');
console.log(scissors);
var shark = new Ad('shark');
console.log(shark);
var sweep = new Ad('sweep', 'png');
console.log(sweep);
var tauntaun = new Ad('tauntaun');
console.log(tauntaun);
var unicorn = new Ad('unicorn');
console.log(unicorn);
var usb = new Ad('usb', 'gif');
console.log(usb);
var watercan = new Ad('water-can');
console.log(watercan);
var wineglass = new Ad('wine-glass');
console.log(wineglass);

// src name/alt/tile views clicks

// DETERMINE WHICH AD GETS VIEWED
// get random index - use getRandomInt
// with two - we need validation - is goat unique?
// assign a src, alt, and title to image
imageOneElement.src = allPhotos[0].src;
imageOneElement.alt = allPhotos[0].name;
imageOneElement.title = allPhotos[0].name;
// log the view - views start at 0 and get incremented with every view
// example: allPhotos[1].views++;
// call a function that assigns the img srcs

// event handler
// keep trach of WHICH image and number of clicks. Increment the correct clicks/vote/like property
// reassign image src properties - call that function again
// validation for when we hit our max clicks
// WHEN WE HIT OUR MAX CLICKS:
// #1 remove eventlistener
// #2 show results - render list with string including name, views, and votes

// event listner attached to the container
