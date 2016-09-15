var putty = require('./jsputty.js')

function addTwoNumbers(num1,num2){
	return num1+num2;
}

function squareNumber(num){
	return num*num;
}

function subtractFiveFromNumber(num){
	return num-5;
}

function makeFriendlyNumber(num){
	return "Hi, I'm " + num;
}

function getStringLength(string){
	return string.length;
}

function makeIntoArray(object){
	return [object];
}

function makeIntoSomeObject(object){
	return {'greeting' : 'hi', 'original': object};
}

function changeGreeting(object){
	object.greeting = "hey";
	return object
}

function stripAwayTheClutter(object){
	return object.original;
}

num1 = 5;
num2 = 10;

numObject = [num1,num2];

console.log(putty.pipe(numObject, addTwoNumbers, squareNumber, subtractFiveFromNumber, makeFriendlyNumber, makeIntoSomeObject, changeGreeting));
console.log("The length of the result of this pipe is " + putty.pipe(3, squareNumber, subtractFiveFromNumber, makeFriendlyNumber, getStringLength));