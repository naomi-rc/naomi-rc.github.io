var headings = ["Space Invaders", "Hibisca", "Twenty-One", "Hangman"];
var images = ["images/space_invaders.png", "images/hibisca_poster.jpg", "images/twenty-one.png", "images/hangman.png"];
var dates = ["November 2018", "January - May 2017","January 2019", "January 2018"];
var contents = ["A remake of the popular Space Invaders game from the 1970s",
				"Take care of plants using Android sensors, notifications, and news and music APIs.",
				"A web-based version of the card game, Twenty One. Play against three computer-players and see if you can win.",
				"A web-based version of Hangman. Sound effects and music play in the background.",
				"https://naomi-rc.github.io/hangman/"
				];
var links = ["", "","https://naomi-rc.github.io/twenty-one/", "https://naomi-rc.github.io/hangman/", ""];
var srcs = ["images/space_invaders1.png", "images/hibisca_poster_original.jpg", "", ""];


/**
* Initializes and displays all project information
*/
const init = function init(){
	var contentDiv = document.getElementById("contentDiv");
	for(var index = 0; index < headings.length; index++){
		var title = elementHelper("h5", {"class":"card-title"}, headings[index]);
		var date = elementHelper("small", {}, dates[index]);
		var content = elementHelper("p", {"class":"card-text"}, contents[index]);
		var link;
		if(links[index] != ""){
			link = elementHelper("a", {"href":links[index], "target":"blank", "class":"btn btn-primary"}, "View "+headings[index]);
		}
		else{
			link = elementHelper("span", {"src":srcs[index], "href":"", "class":"btn btn-primary open-gallery"}, "View "+headings[index]);
		}

		var cardBody = elementHelper("div", {"class":"card-body"}, "", [title, date, content, link]);
		var img = elementHelper("img", {"class":"card-img-top open-gallery", "src":images[index], "alt":headings[index]});

		var cardDiv = elementHelper("div", {"class":"card", "style":"width: 18rem;"}, "", [img, cardBody]);


		contentDiv.appendChild(cardDiv);
	}

	$('.open-gallery').click(function(){
		var path = $(this).attr('src');
		$('#modal-image').attr('src', path);

		var modal = $('#modal');
		modal.show();

		$('.close').click(function(){
			modal.hide();
		});
	});
}


/**
* Constructs HTML element with all its content and details
*/
const elementHelper = function elementHelper(elementName = "", attributes={}, text="", childElements = []){
	if(elementName.length != 0){
		var element = document.createElement(elementName);
		if(Object.keys(attributes).length != 0){
			for(var attribute in attributes){
				element.setAttribute(attribute, attributes[attribute]);
			}
		}
		if(text.length != 0){
			if(elementName == "a")
				element.text = text;
			else
				element.innerText = text;
		}

		if(childElements.length != 0){
			
			for(var child in childElements){
				element.appendChild(childElements[child]);
			}
		}
		return element;
	}
}


//if link is null add eventlistener to open modal to button instead of adding link to src
/**
* Displays modal gallery for projects with images instead of project links
*/
/*$(function()
{
	$('.open-gallery').click(function(){
		var path = $(this).attr('src');
		$('#modal-image').attr('src', path);

		var modal = $('#modal');
		modal.show();

		$('.close').click(function(){
			modal.hide();
		});
	});
});*/
/*$(function()
{
	$('.open-gallery').click(function(){
		var path = $(this).attr('src');
		$('#modal-image').attr('src', path);

		var modal = $('#modal');
		modal.show();

		$('.close').click(function(){
			modal.hide();
		});
	});
});
*/