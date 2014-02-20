// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var sol = [];
	var classFinder = function (array) {
		_.each(array,function(val) {
			if (_.contains(val.classList,className) === true) {
				sol.push(val);
			} else {
				classFinder(val.children);
			}
		});
		return sol;
	};
	return classFinder(document.body.children);
};

//I used the gebcn.html file for testing
