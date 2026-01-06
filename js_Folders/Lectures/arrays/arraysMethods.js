// this is a file for testing array methods in JavaScript

// Concatenation
let fruits = ["apple", "banana", "cherry"];
let vegetables = ["carrot", "broccoli", "spinach"];
let food = fruits.concat(vegetables);
console.log(food); 

// .length()
console.log(`This is length of food array : ${food.length}`);

// toString()
//The toString() method converts the given value into the string with each element separated by commas.
let foodString = food.toString();
console.log(foodString);

//join()
console.log(food.join(" - "));

//delete operator
let emp = {
    empName : "joh",
    sal : 1000
};
console.log(delete emp.sal); // true

//flat()
let nestedArray = [1, 2, [3, 4, [5, 6]]];
let flatArray = nestedArray.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]

//unshift()
let numbers = [2, 3, 4];
numbers.unshift(0, 1);
console.log(numbers); // [0, 1, 2, 3, 4]

//splice()
let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

//mep()
let a = [4, 9, 16, 25];
let sub = a.map(geeks);

function geeks() {
    return a.map(Math.sqrt);
}
console.log(sub);


//reverse
let letters = ['a', 'b', 'c', 'd'];
letters.reverse();
console.log(letters); // ['d', 'c', 'b', 'a']