'use strict';
console.log('--- loading: add-word.js');

const addWordHandler = () => {
  debugger;
  const userInput = prompt('add a new word:');
  if (userInput === null) {
    return;
  }

  words.push(userInput);
  const newMessage = `"${userInput}" has been added:`;
  displayHandler(newMessage);
};
