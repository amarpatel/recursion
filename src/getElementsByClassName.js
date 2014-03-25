// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, val) {
	val = val || document.body;
	var sol = [];

	if(_.contains(val.classList,className) === true){
		sol.push(val);
	};
	_.each(val.children,function(item) {
		sol = sol.concat(getElementsByClassName(className, item));
	});
	return sol;
};

//I used the gebcn.html file for testing
