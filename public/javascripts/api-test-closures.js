function animal (_name, _sound) {
	const legCount = 4;
	const message = `The ${_name} has ${legCount} legs and it's sound is ${_sound}`;
	let say = function() {console.log(message)}
	return say;
}
var philCollins = animal('Cow', 'Peanut Butter and JAAAAMMMMM!');
philCollins();

// in this example the say function creates a closure (scope) for the outer function
// variables and keeps those references in memory