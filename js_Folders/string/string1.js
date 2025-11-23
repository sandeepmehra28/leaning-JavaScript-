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


//combiling strings
let obj = {
    item : "pen",
    price : 20
};
// first way
console.log("this item is " ,obj.item ,"and this is price " ,obj.price);

//second way called is string interpolation
let output = `This is my item ${obj.item} and the price is ${obj.price}`;
console.log(output);



//concatination
let firstName = "sandeep";
let lastName = "mehra";
console.log(firstName.concat(" ",lastName));