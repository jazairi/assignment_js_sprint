// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(numArray){
    numArray.sort();
    numArray.reverse();
    return numArray[0];
  },

  reversed: function(string){
    return string.split('').reverse().join('');
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

  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(){
    // your code here
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}
