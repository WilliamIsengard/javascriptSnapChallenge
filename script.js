var num1 = num1;
var num2 = num2;
num2 * num1;
}

window.onload = function () {
	initSnapChallenge();
};

function initSnapChallenge() {
	let form = document.getElementById("math-form");

	function initSnapChallenge() {
		let form = document.getElementById("string-form");

	form.addEventListener("submit", (event) => {
		handleItemForm(event, form);
	});
}

function handleItemForm(event, formRef) {
	if(event.preventDefault) {
		event.preventDefault();
	}

	computeMathProblem();
	formRef.reset();

	createConcatenation();
	formRef.reset();

	return false;
}

function computeMathProblem() {
	let num1 = document.getElementById("num1");
	let num2 = document.getElementById("num2");
	let id = getRandomInt(0, 1000000);

function addNumbers(num1, num2) {
	let answer = num1 + num2;
	console.log(answer);
	return answer;
}
addNumbers (num1, num2);

	let itemHtml = createListItemHtml(num1.value, num2.value, id);
	console.log("Item HTML: ", itemHtml);
	let mathAnswer = document.getElementById("math-argument");
	itemListRef.insertAdjacentHTML("afterend", itemHtml);

	setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id) {
	let deleteButton = document.getElementById("button"+id);
	deleteButton.addEventListener("click", () => {
		removeListItem(id);
	});
}

function createListItemHtml(num1, num2, id) {
	return `<li id="int${id}"> 
				${num1} - ${num2}
				<button id="button${id}">Delete Item</button>
		</li>`;
}

function removeListItem(id) {
	let listItem = document.getElementById("int"+id);
	listItem.parentNode.removeChild(listItem);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}