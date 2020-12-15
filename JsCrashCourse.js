
// var name="Shreya";
// name = name.toUpperCase();
// name = name.toLowerCase();

var name = prompt("What is your name?");

var firstChar = name.slice(0,1);

var UpperfirstChar = firstChar.toUpperCase();

var restOfTheName = name.slice(1,name.length);

restOfTheName = restOfTheName.toLowerCase(); 

var CapitalizedName = UpperfirstChar + restOfTheName;

alert("Hello, " + CapitalizedName);