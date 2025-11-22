// this is a string file
 
let str = "sandeep";

console.log(str[0],str[5]);


// template literals
let specialLit = `this is a template`;
console.log(typeof specialLit);


//string methods
let name = "sandeep mehra";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(0,6));
console.log(name.replace("sandeep","sandy"));
console.log(name.split(" "));





//concatination
let firstName = "sandeep";
let lastName = "mehra";
console.log(firstName.concat(" ",lastName));