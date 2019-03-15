var headings = ["Twenty-One", "Hangman"];
var images = ["images/twenty-one.png", "images/hangman.png"];
var dates = ["January 2019", "January 2018"];
var contents = ["A web-based version of the card game, Twenty One. Play against three computer-players and see if you can win.",
				"A web-based version of Hangman.",
				"https://naomi-rc.github.io/hangman/"
				];
var links = ["https://naomi-rc.github.io/twenty-one/"];

const init = function init(){

var contentDiv = document.getElementById("contentDiv");
	for(var index = 0; index < headings.length; index++){
		var title = elementHelper("h5", {"class":"card-title"}, headings[index]);
		var date = elementHelper("small", {}, dates[index]);
		var content = elementHelper("p", {"class":"card-text"}, contents[index]);
		var link = elementHelper("a", {"href":links[index], "target":"blank", "class":"btn btn-primary"}, "View "+headings[index]);

		var cardBody = elementHelper("div", {"class":"card-body"}, "", [title, date, content, link]);
		var img = elementHelper("img", {"class":"card-img-top", "src":images[index], "alt":headings[index]});

		var cardDiv = elementHelper("div", {"class":"card", "style":"width: 18rem;"}, "", [img, cardBody]);


		contentDiv.appendChild(cardDiv);
	}
}



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


