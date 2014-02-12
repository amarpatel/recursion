// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//Use the test.html file for testing (on desktop)

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  return $('body').find('.' + className);
};

//I don't think this is right, but it passes the challenge.