//Qs2. Write a code which can give grades to students according to their scores:
/** 80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F */

const grade = Number(prompt("Enter your grade : "));
switch (true) {
    case grade>=80 && grade<=100:
         console.log("A");
        break;
    case grade>= 70 && grade<80:
        console.log("B");
        break;
    case grade >=60 && grade<70:
        console.log("C");
        break;
    case grade >=50 && grade<60:
        console.log("D");
        break;
    case grade >=0 && grade<50:
        console.log("F");
        break;
    default:
        break;
}