/********************
** Author: Kelvin Lu
** Date: 3/02/2018
** Description: This is the .js file for the Final Project
********************/

document.addEventListener('DOMContentLoaded', bindFeedback);

function bindFeedback() {
	document.getElementById('fSubmit').addEventListener('click', function(event) {
		var name = document.getElementById('fname').value;
		alert("Thank you " + name + " for your feedback!");
		document.getElementById('fname').value = "";
		document.getElementById('feedback').value = "";
		event.preventDefault();
	});
}