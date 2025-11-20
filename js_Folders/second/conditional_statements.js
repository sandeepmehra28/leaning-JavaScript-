//this is my conditional statements file
let age = 70;
if(age < 18 ){
    console.log("you can't  vote");
}else if(age >= 18 && age <=70){
console.log("you can vote")
}


// another example
let num = 20;
if(num % 2 == 0){
    console.log(num , "is even");
}else{
    console.log(num , "is odd");
}

// another example

let mode = "";
let color;
if(mode==="dark"){
    color = "black";
}else if(mode === "blue"){
    color = "blue";
}else if(mode === "red"){
    color = "red";
}else{
    color = "white";
}

console.log(color);

// if you using only one if statement then you use only one if  like this
if(mode === "black" )  console.log(color);


// ternery operator

let a =18 ;
(a >= 18) ? console.log("adult"): console.log("not adult");


// switch statements

let fruit = prompt("please enter your fruit");
switch (fruit) {
    case "":
        
        break;

    default:
        break;
}

