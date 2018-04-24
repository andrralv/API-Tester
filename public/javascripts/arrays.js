(function IIFE() {
	var colors = ["yellow", "blue", "green", "brown", "orange"];
	let array1 = [];
	let array2 = [];
	let array3 = [];

	for (var i = 0; i < colors.length; i++) {
		array1.push(colors[i]);
	}

	for (var i of colors) {
		array2.push(i);
	}

	colors.forEach(function(element) {
		array3.push(element);
	});

	console.log("traditional for loop: \n");
	console.log(array1);
	console.log("using ES6 for of: \n");
	console.log(array2);
	console.log("using foreach object\n");
	console.log(array3);
})();
