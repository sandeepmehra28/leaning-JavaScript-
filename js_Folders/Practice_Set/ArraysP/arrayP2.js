//Q1
// let studentsMarks = [95, 97, 89, 89, 99, 90, 56, 78];
// let output = studentsMarks.filter((marks)=>{
//   return marks >= 90;
// })
// console.log(output);

//Q2
let n = parseInt(prompt("Enter number: "));
let arr = [];

for (let i = 0; i < n; i++) {
  let value = parseInt(prompt("Enter value: "));
  arr.push(value);
}
console.log(`After insertion: `+arr);

let sumOfAll = arr.reduce((res,curr)=>{
  return res+curr;
})
console.log(`Sum of all elements: `+sumOfAll);

let product = arr.reduce((acc, curr) => acc * curr, 1);
console.log(`Product of all elements: ` + product);