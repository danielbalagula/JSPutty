var pipe = function(object){
	var newObject = object;
	if (isArray(newObject) === false){
		newObject = [newObject];
	}
	for (var counter=1; counter<arguments.length; counter++){
		if (arguments[counter].length !== newObject.length){
			var argumentError = "Error at " + getFunctionName(arguments[counter]) + "(): expected " + arguments[counter].length + " arguments and got " + newObject.length
			throw argumentError;
		}
		newObject = arguments[counter].apply(this, newObject);
		if (isArray(newObject) === false && counter+1 < arguments.length){
			newObject = [newObject];
		}
	}
	return newObject;
}

function getFunctionName(fun) {
	var ret = fun.toString();
	ret = ret.substr('function '.length);
	ret = ret.substr(0, ret.indexOf('('));
	return ret;
}

function isArray(object){
	if ( Object.prototype.toString.call(object) === '[object Array]' ) {
		return true;
	} else {
		return false;
	}
}

module.exports = {
	pipe: pipe
}