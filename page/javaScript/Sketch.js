
var time = setInterval(Timer,1000);
//var Solve = document.getElementById("")
const clss = document.getElementsByClassName("front").length;

var i=0;
var j=0;

function Timer(){ 
  if (i<10)
    document.getElementById("time").innerHTML = j+":0"+i;
  else 
    document.getElementById("time").innerHTML = j+":"+i;
  if (i==59){
    j++;
    i=0;
  }
  i++;
}
var N=0;
var u=false;
const cards = document.querySelectorAll('.card');
let twocards= false;
let card1,card2;
let canflip=false;

function flipCard() {
  if(canflip === true)return;
  if(this === card1) return;

  this.classList.add('flip');
  if(twocards === false){
    twocards = true;
    card1 = this;
  }
  else{
    twocards = false;
    card2 = this;
    if(card1.dataset.img === card2.dataset.img){
      N++;
      if (N==clss/2&&u==false){
        console.log("done");
        alert("Done :D");
      //  window.location.replace("start.html");
      }
      console.log(N);
      card1.removeEventListener('click',flipcard);
      card2.removeEventListener('click',flipcard);
      //resetcards
      twocards = false;
      canflip = false;
      card1 = null;
      card2 = null;
    }
    else{
      canflip=true;

      setTimeout(()=>{ card1.classList.remove('flip'); card2.classList.remove('flip');
      //resetcards
      twocards = false;
      canflip = false;
      card1 = null;
      card2 = null;;},1200);            
    }
  }
}
console.log(document.getElementsByClassName("front").length);
function solve(){
  u=true;
  console.log(clss);
  for (var count=0;count<clss;count++){
    var c = document.getElementsByClassName("front")[count];
    c.click();
  }
  clearInterval(time);
}

(function randomdistribution (){
  cards.forEach(card => { 
  let position = Math.floor(Math.random() * 16);
  card.style.order = position ;
  });
})();
cards.forEach(card => card.addEventListener('click', flipCard));




/*for(var i=0;i<n;i++){
  var x = document.createElement('x');
  var y = document.createElement('y');
  x = images[i].f;
  y = images[i].b;
  console.log(x.src);
  document.body.appendChild(x);
  document.body.appendChild(y);
}*/


/*var C=0;
function myFn() {
var image =[];
var ArrayOfImages =['Blanck.jpg','Blanck.jpg','Blanck.jpg','Blanck.jpg'];
for (var i = 0; i < ArrayOfImages.length; i++) {
  var img = document.createElement('img');
  img.src = ArrayOfImages[i];
  img.height = "45";
  img.width = "50";
  img.setAttribute("border","1px solid");
  img.setAttribute("background","#000");
  img.setAttribute("margin","0");
  img.setAttribute("opacity","0.2");
  img.setAttribute("grid-column","7/8");
  image[i]= img;
  C+=1;
  grid.setAttribute("grid-column","");
  document.getElementById("demo").appendChild(img);
}

  /*var x = document.createElement("IMG");
  x.setAttribute("src", "Khadija.jpg");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.getElementById("demo").appendChild(x);*/
//  document.getElementById("demo").innerHTML = document.getElementById("IMG");
//}









































/*function printImage(image)
{
        var printWindow = window.open('Blanck.jpeg', 'Print Window','height=400,width=600');
        printWindow.document.write('<html><head><title>Print Window</title>');
        printWindow.document.write('</head><body ><img src=\'Blanck.jpeg');
        printWindow.document.write(image.src);
        printWindow.document.write('\' /></body></html>');
        printWindow.document.close();
        printWindow.print();
}

var image = document.getElementById('image');
printImage(image);*/





//var main = document.getElementById("main");
/*var ArrayOfImages =['Khadija.jpg','Nourhan.jpg','Khadija.jpg','Nourhan.jpg'];
var image =[];
var ArrayOfImages =['Khadija.jpg','Nourhan.jpg','Khadija.jpg','Nourhan.jpg'];
for (var i = 0; i < ArrayOfImages.length; i++) {
	var img = document.createElement('img');
  img.src = ArrayOfImages[i];
  img.height = "45";
  img.width = "50";
  image[i]=img;
  document.body.appendChild(img);
}
	var img = document.getElementById("img1");
  var main = document.getElementById("main").tagname;
  document.getElementById("main").innerHTML = img;*/


/*var x = document.getElementById('img1');
document.getElementById("demo").innerHTML = x;
document.demo.appendChild(x);*/
/*function myFunction() {
  var x = document.getElementById("myImg").src;
  document.getElementById("demo").innerHTML = x;
}
*/
/*function myFunction() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "Khadija.jpg");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
}*/
/*for (var k=0;k<12;k++){
	for (var j=0;j<12;j++){
		var p = document.createElement('p');
		p.height = "45";
	    p.width = "50";
		document.getElementById("grid").appendChild(p);
	}
}*/





/*var imageArray = [];
var opacity = 0;
var intervalId = 0;

function fadeIn (index){
	intervalID = setInterval(show,200);
	
}
function fadeOut (){
	intervalID = setInterval(hide,200);//returns a unique id of timer
}
function hide(){
	var img = document.getElementById("img1");
	opacity = 1//Number(window.getComputedStyle().getPropertyValue("opacity"));//gets current opacity
	while (opacity>0){
		opacity-=0.1;
		img.style.opacity=opacity;
		console.log(opacity);
	}
	clearInterval(intervalId);
	
}
function show (){
	var img = document.getElementById("img2");
	opacity = 0//Number(window.getComputedStyle().getPropertyValue("opacity"));//gets current opacity
	while (opacity<1){
		opacity+=0.1;
		img.style.opacity=opacity;
		console.log(opacity);
	}
	clearInterval(intervalId);
}
//object.onclick = function(){myScript};
var ArrayOfImages =['Khadija.jpg','Nourhan.jpg','Khadija.jpg','Nourhan.jpg'];
var image =[];
var ArrayOfImages =['Khadija.jpg','Nourhan.jpg','Khadija.jpg','Nourhan.jpg'];
for (var i = 0; i < ArrayOfImages.length; i++) {
	var img = document.createElement('img');
  img.src = ArrayOfImages[i];
  img.height = "45";
  img.width = "50";
  image[i]=img;
  document.body.appendChild(img);
}

image[0].onclick = () => console.log("image " + 0 + " clicked");
image[1].onclick = () => console.log("image " + 1 + " clicked");
image[2].onclick = () => console.log("image " + 2 + " clicked");
image[3].onclick = () => console.log("image " + 3 + " clicked");
*/
//var myVar = setInterval(myTimer, 1000);

/*function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}*/
// function that builds a grid in the "container"
// function that builds a grid in the "container"
/*function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(16);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });
});
*/




























/*//declaring constants
var myNAme = "Khadija";//For whole program
let Name = "KH";//Within scope+u can declare the variable only once
const Nam = "LL";//Can never be changed "Read only" but in arrays u can update using Arr[]=
//Printing to console
console.log("Hello World");
//Concatenating
var myStr = "This is " + "a string"
console.log(myStr);
//Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);
//Example
var myStr = "Jello World";
myStr[0]= "H";//You cannot modify
console.log(myStr);
myStr = "Hello World";
console.log(myStr);
//printing last letter
console.log(myStr[myStr.length - 1]);
//WordBlank
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
	var result = "";
	result += "The "+myAdjective+myNoun+myVerb+" to the store "+myAdverb;
	return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
//Arrays
var ourArray = ["John",23];
console.log(ourArray);
ourArray[0] = 24;
console.log(ourArray);
//Nested Array
var myArray = [["Omar",43],["Khaled",46],["Khloud",50]];
console.log(myArray[0][0]);
myArray.push("Kamal");
myArray.push(["Kamel",90]);
console.log(myArray);
var data = myArray.pop();
console.log(data);
console.log(myArray);
data = myArray.shift();
console.log(data);
console.log(myArray);
myArray.unshift("Salwa");
console.log(myArray);
//Scoop of Variables
var Outfit = "Sweater";
function myOutfit(){
	var Outfit="T-Shirt"
	return Outfit;
}
console.log(myOutfit());
console.log(Outfit);
//
function nextInLine(arr , item){
	arr.push(item);
	return arr.shift();
}
var testArr=[1,2,3,4,5];

console.log("Before: "+ JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: "+ JSON.stringify(testArr));
//Boolean
//== comparison operator
//=== string comparator
// 3=='3' but 3!==='3' written !==

//objects
var ourDog = {
	"name": "DOG",
	"Colour": "Black"
};
console.log(ourDog);

var Num = {
	12 : "Namth",
	16 : "Montana",
	19 : "Unitas"
};

var playerNumber = 16;
var player = Num[playerNumber];
console.log(player);
Num[20] = "Samy";
Num[16] = "Hnnah";
console.log(Num);
delete ourDog.name;
console.log(ourDog);
delete Num[16];
console.log(Num);
var myMusic=[
	{
		"name" : "Songs",
		"format" :["CD's","DVD's"]

	},
	{
		12 : "Hey babe",
		13 : "Hello"
	}
];
console.log(myMusic);
console.log(myMusic[0].format[0]);
//While Loops
var myArray = [];
var i = 0;
while(i<5){
	myArray.push(i++);
}
console.log(myArray);
//For Loops
var ourArray =[];
for (var i=0; i<5; i++)
	ourArray.push(i);
console.log(ourArray);
//Random
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumberBetween0and19);
function randomWholeNum(){
	return Math.floor(Math.random() * 20);
}
console.log(randomWholeNum());
//Random in variable range
function ourRandomRange(ourMin, ourMax){
	return Math.floor(Math.random()*(ourMax- ourMin +1))+ourMin;
}
function convertToInteger(str){//from binary
	return parseInt(str, 2);
}
console.log(convertToInteger("1001"));

//if condition? statement-if-true:statement-if-false;
//num>0 ? "Positive" : num < 0 ? "negative" : "Zero";
const Math_Constants = {
	PI : 3.14 
};
Object.freeze(Math_Constants);
try{
	Math_Constants.PI=99;
}catch(ex){
	console.log(ex);
}
console.log(Math_Constants);
//Arrow Ananymous Fns
var magic = function(){
	return new Date();
};//can be written with arrow
var Magic = () =>{//arrow function
	return new Date();
}//if only one variable in it it can be shortened more
const MAgic =() => new Date();
//Arrow with arguments
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));
//Arrow fn can be written in higher order
var myImage = document.getElementByID('mainImage')
*/