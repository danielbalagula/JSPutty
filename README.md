# JSPutty, the UNIX-like piping method for Javascript

JSPutty is a way to manipulate and transform your data in a way that is readable, stylish, and familiar.

## Installation

```javascript

npm install jsputty

```

## Usage

```javascript
var pipe = require('putty').pipe();

var originalString = "Hi";

var addPeriodToString = function(string){
	return string + ".";
}

var getStringLength = function(string){
	return string.length;
}

console.log(pipe(originalString, addPeriodToString, getStringLength)); // 3
```

You can also use functions that use multiple arguments:

```javascript
var putty = require('jsputty')

var string  = "hi"

var num = 3

function multiplyString(string,num){
  var result = ""
  for (var i=0; i<num; i++){
    result += string
  }
  return result;
}

function getLength(string){
  return string.length
}

console.log(putty.pipe([string,num],multiplyString,getLength))//6
```

## Some things to note

JSPutty checks that everything returned from each function equals the number of arguments expected by the next function. If there is a difference in these numbers, you will get an error.

JSPutty does not currently have explicit support for promises. This will be added.

I accept all help and contributions to the package. If you've found a bug, please submit it. Even better, see if you can fix it!

