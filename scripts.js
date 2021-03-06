// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(numArray){
    numArray.sort();
    numArray.reverse();
    return numArray[0];
  },

  reversed: function(str){
    return str.split('').reverse().join('');
  },

  loudSnakeCase: function(str){
    // removing punctuation and extra spaces with regex http://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
    var punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var removeExtraSpaces = punctuationless.replace(/\s{2,}/g," ");
    var snakeCase = removeExtraSpaces.replace(/\s/g,"_");

    // turn up that snake case! https://medium.freecodecamp.com/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27#.honby3krg
    snakeCase = snakeCase.split('');
    for (var i = 0; i < snakeCase.length; i++) {
      if (snakeCase[i-1] === "_") {
        snakeCase[i] = snakeCase[i].charAt(0).toUpperCase();
      }
    }
    return snakeCase.join('');
  },

  compareArrays: function(arr1, arr2){
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  },

  fizzBuzz: function(num){
    var inputArray = [];
    for (i = 0; i < num; i++) {
      inputArray[i] = i+1;
    }
    for (i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === 0) {
        continue;
      }
      else if (inputArray[i] % 3 === 0 && inputArray[i] % 5 === 0) {
        inputArray[i] = "FIZZBUZZ";
      }
      else if (inputArray[i] % 3 === 0) {
        inputArray[i] = "FIZZ";
      }
      else if (inputArray[i] % 5 === 0) {
        inputArray[i] = "BUZZ";
      }
      else {
        continue;
      }
    }
    return inputArray;
  },

  myMap: function(inputArray,inputFunction){
    for(i = 0; i < inputArray.length; i++) {
      inputArray[i] = inputFunction(inputArray[i]);
    }
    return inputArray;
  },

  primes: function(input){
    // Thanks to Dyslexicon...this was a tough one!
    var numArray = [];
    var primes = [];

    for (var i = 2; i < input; i++) {
      numArray.push(i);
    }

    for (var n = 0; n < numArray.length; n++) {
      var notPrime = [];
      for (var num = 2; num < numArray[n]; num++) {
        if (numArray[n] % num === 0) {
          notPrime.push('');
        }
      }

      if (!notPrime.length) {
        primes.push(numArray[n]);
      }
    }
    
    return primes
  },
}
