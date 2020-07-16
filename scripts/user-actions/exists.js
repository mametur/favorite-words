'use strict';
console.log('--- loading: exists.js');

const existsHandler = () => {
	debugger;
	const userInput = prompt('find if a word exists:', '');

	if (userInput === null) {
		return;
	}

	const equalsUserInput = (entry) => {
		return entry === userInput;
	};
	const itExists = words.find(equalsUserInput);
	if (itExists) {
		alert(`"${userInput}" exists`);
	} else {
		alert(`"${userInput}" does not exist`);
	}
};
