/**
All items have an offer of 10% OFF on them. Change the array to store final price afterapplying offer.Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
*/
// let marksOfStudents = [85, 97, 44, 37, 76, 60];
// let totalMarks = 0;

// // for (let i = 0; i < marksOfStudents.length; i++) {
// //     totalMarks += marksOfStudents[i];
// // }
// // let averageMarks = totalMarks / marksOfStudents.length;
// // console.log(`Total Marks: ${totalMarks}`);
// // console.log(`Average Marks: ${averageMarks}`);

// let sum = 0;
// for(let val of marksOfStudents){
//     sum+=val;
// }
// let avg = sum/marksOfStudents.length;
// console.log(`This is your avg: ${avg}`);

//-----------------Q2
//let items = [250, 645, 300, 900, 50];
//for using for-each loop
// let i = 0;
// for(let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value after discount: ${items[i]}`);
//     i++;
// }

//for using normal for loop
// for(let i = 0; i<items.length;i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
//     console.log(`Value after discount: ${items[i]}`);
// }

//----------------Q3
const companies=["Bloomberg","Microsoft", "Uber", "Google", "IBM","Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(2, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
