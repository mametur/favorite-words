'use strict';
console.log('--- loading: replace.js');

const replaceHandler = () => {
  debugger;
  const userInput1 = prompt('enter the word to replace:');
  if (userInput1 === null) {
    return;
  }

  const entryIsUserInput = (entry) => {
    return entry === userInput1;
  };
  const inputExists = words.find(entryIsUserInput);
  if (inputExists === undefined) {
    alert(`"${userInput1}" does not exist`);
    return;
  }

  const userInput2 = prompt(`enter a word to replace "${userInput1}"`);
  if (userInput2 === null) {
    return;
  }

  const replaceWithInput2 = (entry) => {
    if (entry === userInput1) {
      return userInput2;
    } else {
      return entry;
    }
  };
  words = words.map(replaceWithInput2);

  displayHandler(`"${userInput1}" has been replaced with "${userInput2}"`);
};
