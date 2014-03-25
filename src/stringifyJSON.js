// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

// Notes for conversion:

// JSON.stringify(value[, replacer [, space]])

// value: The value to convert to a JSON string.
// replacer: If a function, transforms values and properties encountered while
// 	stringifying; if an array, specifies the set of properties included in 
// 	objects in the final string. A detailed description of the replacer function
// 	is provided in the javaScript guide article Using native JSON.
// space:Causes the resulting string to be pretty-printed.


// JSON.stringify converts an object to JSON notation representing it
// -Properties of non-array objects are not guaranteed to be stringified in any particular order.
// -Boolean, Number, and String objects are converted to the corresponding 
// 	primitive values during stringification
// -If undefined, a function, or an XML value is encountered during conversion
// 	 it is either omitted (when it is found in an object) or censored to null
// 	 (when it is found in an array).

//JSON.stringify({});
//// '{}'
//JSON.stringify(true);                
//// 'true'
//JSON.stringify("foo");               
//// '"foo"'
//JSON.stringify([1, "false", false]); 
//// '[1,"false",false]'
//JSON.stringify({ x: 5 });            
//// '{"x":5}'
//JSON.stringify({x: 5, y: 6});        
//// '{"x":5,"y":6}' or '{"y":6,"x":5}'

// types of inputs:
// 	boolean
// 	strings 
// 	numbers

// 	arrays with above included
// 	objects with above included




function stringifyJSON (obj) {
  var sol = [];
  if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '\"' + obj + '\"';   
  } else if (Array.isArray(obj)) {
    _.each(obj,function(val){sol.push(stringifyJSON(val))});
    return "[" + sol.join(",") + "]";
  } else if (typeof obj === 'object') {
    _.each(obj,function(val,key){sol.push(stringifyJSON(key) + ':' + stringifyJSON(val))});
    return sol ='{' + sol.join(",") + '}';
  } else {
    return sol;
  }
}

// including missing variables for SpecRunner.html
var arrayWithValidElements = [true,'false',42];
var objectWithInvalidAttributes = {x: 5, y: 6};