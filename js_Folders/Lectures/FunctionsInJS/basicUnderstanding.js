// let num1 = 5;
// let num2 = 10;
// console.log(sumF(num1,num2));

// let name1 = 'sandeep';
// let name2 = 'mehra';
// console.log(sumF(name1,name2));

// function sumF(num1, num2){
//   return num1+num2;
// }

myFunction();
function myFunction(){//normal function declaration
  console.log('this is my function');
  console.log('and my name is sandeep');
}

//parameterized function
function greetUser(name,age){
  console.log(`Hello ${name}, you are ${age} years old.`);
}
greetUser(`sandeep`,23);