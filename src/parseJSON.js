// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  // your code goes here

  //incomplete code
  if (!isNaN(Number(json))) {
  	return Number(json);
  } else if (json === 'true') {
  	return true;
  } else if (json === 'false') {
  	return false;
  } 
};
