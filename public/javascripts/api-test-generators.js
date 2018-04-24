/** numbers test **/
function *someNumbers() {
	console.log("Let's get it on");
	yield 2;
	yield 3;
	return 4;
}
var generatorObj = someNumbers();
var returned = generatorObj.next();
console.log(returned)

/** fetch and do something after **/
function *fetcher() {
	const url = "http://localhost:3031/api/";
	yield fetch(url).then(r => r.json())
	.then(data => console.log(data))
		.catch(e => console.log("Booo"))
	yield console.log("It's done!");
}
var gen = fetcher();