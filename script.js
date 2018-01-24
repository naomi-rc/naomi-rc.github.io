

function run() {
	var myDiv = document.getElementById("myDiv");
	myDiv.onclick = function(){alert('hi')};
	var audio = new Audio("jeopardy.mp3");
	audio.play();
}