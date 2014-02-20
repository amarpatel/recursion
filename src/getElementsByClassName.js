// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
	var sol = [];
	var classFinder = function (array) {
		_.each(array,function(val) {
			if (val.className === className) {
				sol.push(val);
			}
			if (val.className !== undefined && val.className.split(' ').length > 1) {
				if (_.contains(val.classList,className) === true) {
					sol.push(val);
				}
			}
			if (val.children.length > 0) {
				array = val.children
				classFinder(array);
			}
		});
		return sol;
	};
	return classFinder(document.body.children);
};

//I used the gebcn.html file for testing
