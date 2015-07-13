//function using the console log

function firstFunction() {
   console.log(1 + 1);
 }

 function secondFunction() {
   return 2 + 2;
 }

//Since the firstFunction is using "console.log", the result of "1 + 1" will be
//printed to the console.
firstFunction();

//Since the secondFunction is using "return", the result of "2 + 2" is getting stored
//in JS when the function is called.  We can view the result of the secondFunction by
//"console.logging" the secondFunction.  And as you can see, in the console log, the
//firstFunction printed "2" and the secondFunction returned "4".
console.log(secondFunction());
