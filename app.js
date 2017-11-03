'use strict';

var imagesToUse = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];
var arrOfObjects = [];
var arrOfProducts = []; // these are the items purchased.
// constructor function??
function Picture(name) {
  this.filename = name;
  this.path = 'images/' + name;
  this.timesDisplayed = 0;
  this.timesClicked = 0;
}

function addOrderedToCart(event) {
  var item  = event.target.product.value;
  var qty = event.target.quantity.value;
  arrOfProducts.push(item,qty);
}


function listenForCartButton() {
  var btn = document.getElementsByTagName('button');
    btn.addEventListener('click',addOrderedToCart);
}

function populateArray() {
  for (var i = 0; i < imagesToUse.length; i++) { //populates the array with pic objects
    var newImage = new Picture(imagesToUse[i]);
    arrOfObjects.push(newImage);
  }
  localStorage.arrOfObjects = JSON.stringify(arrOfObjects);
}
