'use strict';
console.log('--- loading: display-all.js');

// reverse engineering!
//   the handler has no tests, study the demo to write this function
const displayHandler = (message = '', arrayToDisplay = words) => {
  debugger;
  const combineStrings = (acc, next) => {
    return _;
  }
  const alertMessage = arrayToDisplay
    ._(_, _);
  alert(_);
};


/* about default parameters
  https://codeburst.io/understanding-default-parameters-in-javascript-5f3c4dcfc838
  https://www.javascripttutorial.net/es6/javascript-default-parameters/
  hardcoded default: http://www.pythontutor.com/live.html#code=//%20hardcoded%20default%20value%0Aconst%20funky%20%3D%20%28param%20%3D%20'yo'%29%20%3D%3E%20%7B%0A%20%20return%20param%3B%0A%7D%3B%0A%0Aconst%20noArg%20%3D%20funky%28%29%3B%0A%0Aconst%20stringArg%20%3D%20funky%28'jam'%29%3B%0A%0Aconst%20nullArg%20%3D%20funky%28null%29%3B%0A%0Aconst%20boolArg%20%3D%20funky%28true%29%3B%0A%0Aconst%20numberArg%20%3D%20funky%2812%29%3B%0A%0Aconst%20undefinedArg%20%3D%20funky%28undefined%29%3B&cumulative=false&curInstr=19&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
  variabled default: http://www.pythontutor.com/live.html#code=//%20variabled%20default%20value%0Aconst%20defaultParam%20%3D%20'yo'%3B%0A%0Aconst%20funky%20%3D%20%28param%20%3D%20defaultParam%29%20%3D%3E%20%7B%0A%20%20return%20param%3B%0A%7D%3B%0A%0Aconst%20noArg%20%3D%20funky%28%29%3B%0A%0Aconst%20stringArg%20%3D%20funky%28'jam'%29%3B%0A%0Aconst%20nullArg%20%3D%20funky%28null%29%3B%0A%0Aconst%20boolArg%20%3D%20funky%28true%29%3B%0A%0Aconst%20numberArg%20%3D%20funky%2812%29%3B%0A%0Aconst%20undefinedArg%20%3D%20funky%28undefined%29%3B&cumulative=false&curInstr=0&heapPrimitives=false&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
*/
