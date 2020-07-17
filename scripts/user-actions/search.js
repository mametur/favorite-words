'use strict';
console.log('--- loading: search.js');

const searchHandler = () => {
  debugger;
  const userInput = prompt('Enter search word: ');
  if (userInput === null) {
    return;
  }

  const includesSubstring = (entry) => {
    return userInput === entry;
  };
  const foundWords = words.filter(includesSubstring);

  displayHandler(`"${userInput}":,\n ${foundWord}`,[]);
};
