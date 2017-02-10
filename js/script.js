document.addEventListener('DOMContentLoaded', function(){
	var newDice = document.getElementById('newDice');
	var saveDice = document.getElementById('saveDice');

	initDices();

	newDice.addEventListener('submit', function(e){
		e.preventDefault();

		var nbFaces = document.getElementById('newDiceFaces').value;
		var nbDices = document.getElementById('newDiceNumber').value;

		var resultDices = rollTheDice(nbFaces, nbDices);

		document.getElementById('resultDicesTotal').innerHTML = "Total : " + resultDices.total;
		document.getElementById('resultDicesEach').innerHTML = "Each : " + resultDices.each;
	});

	saveDice.addEventListener('click', function(){
		var newDiceName = document.getElementById('newDiceName').value;
		var newDiceNumber = document.getElementById('newDiceNumber').value;
		var newDiceFaces = document.getElementById('newDiceFaces').value;

		createDice(newDiceName, newDiceNumber, newDiceFaces);
	});
});

function initDices(){
	var dices = document.getElementsByClassName('dice');

	for(var i = 0; i < dices.length; i++){
		dices[i].addEventListener('click', function(e){
			var nbFaces = e.target.getAttribute('data-faces');
			var nbDices = e.target.getAttribute('data-dices');

			var resultDices = rollTheDice(nbFaces, nbDices);

			document.getElementById('resultDicesTotal').innerHTML = "Total : " + resultDices.total;
			document.getElementById('resultDicesEach').innerHTML = "Each : " + resultDices.each;
		});
	}

	var savedDices = getCookie('addedDices').split('@@');

	for(var i = 0; i < savedDices.length; i++){
		savedDices[i] = savedDices[i].split('##');
	}

	console.log(savedDices);
}

function rollTheDice(faces, dices){
	var resultDicesEach = [];
	for(var i = 0; i < dices; i++){
		resultDicesEach[i] = Math.floor((Math.random() * faces) + 1);
	}

	var resultDicesTotal = 0;
	for(var i = 0; i < resultDicesEach.length; i++){
		resultDicesTotal += resultDicesEach[i];
	};

	var resultDices = {total:resultDicesTotal, each:resultDicesEach};

	console.log(resultDices);
	return resultDices;
}

function createDice(name, dices, faces){
	var newDice = document.createElement('button');
		newDice.setAttribute('type', 'button');
		newDice.setAttribute('class', 'dice');
		newDice.setAttribute('data-faces', faces);
		newDice.setAttribute('data-dices', dices);
		newDice.setAttribute('title', 'dices : ' + dices + ' - faces : ' + faces);
		newDice.innerHTML = name;

	document.getElementById('diceList').appendChild(newDice);
	
	initDices();

	var addedDices = getCookie('addedDices');
	addedDices += name + "##" + dices + "##" + faces + "@@";

	setCookie('addedDices', addedDices, 1000000);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}