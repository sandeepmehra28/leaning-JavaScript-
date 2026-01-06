const std = {
    fullName : "sandeep mehra",
    age : 23,
    cgpa : 8.8,
    isPass : true
};
const std1 = {
    fullName : "sonu yadav",
    age : 22,
    cgpa : 7,
    isPass : true
};
std["age"]  = std["age"] + 1;
std["fullName"] = "sonu yadav";
console.log(std.age , std.fullName)