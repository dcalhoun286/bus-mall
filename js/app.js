'use strict';

// global variables
// all goats array
var allPhotos = [];
// I can easily adjust my max with this variable
var maxClicksAllowed = 25;
var actualClicks = 0;

// get some ids from the DOM
var myContainer = document.getElementById('container');
var imageOneElement = document.getElementById('image-one');
var imageTwoElement = document.getElementById('image-two');
var imageThreeElement = document.getElementById('image-three');
var imageFourElement = document.getElementById('image-four');
var imageFiveElement = document.getElementById('image-five');
var imageSixElement = document.getElementById('image-six');
var imageSevenElement = document.getElementById('image-seven');
var imageEightElement = document.getElementById('image-eight');
var imageNineElement = document.getElementById('image-nine');
var imageTenElement = document.getElementById('image-ten');
var imageElevenElement = document.getElementById('image-eleven');
var imageTwelveElement = document.getElementById('image-twelve');
var imageThirteenElement = document.getElementById('image-thirteen');
var imageFourteenElement = document.getElementById('image-fourteen');
var imageFifteenElement = document.getElementById('image-fifteen');
var imageSixteenElement = document.getElementById('image-sixteen');
var imageSeventeenElement = document.getElementById('image-seventeen');
var imageEighteenElement = document.getElementById('image-eighteen');
var imageNineteenElement = document.getElementById('image-nineteen');
var imageTwentyElement = document.getElementById('image-twenty');

// goat constructor
// src name/alt/tile views clicks

// DETERMINE WHICH GOAT GETS VIEWED
// get random index - use getRandomInt
// with two - we need validation - is goat unique?
// assign a src, alt, and title to image
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
