$(function(){
	let list = [];
	var url = "http://localhost:3031/api/";
	$.getJSON(url).done(function(data){
		let i = data.foo.colors;
		$.each(i, function(i,f){
			list.push(f.color);
		});
		console.log(list);
	});
})