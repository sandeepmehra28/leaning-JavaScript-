let nums = [2,3,4,5,6,7,8];
// nums.map((val)=>{
//   console.log(val);
// })

// thye return new array
// let newArr = nums.map((val)=>{
//   return val*val;
// })
// console.log(newArr);

//filter method ( they return new array based on condition)
// let newArr = nums.filter((val)=>{
//   return val > 4;
// })
// console.log(newArr);

//reduce method
// let out = nums.reduce((res , curr)=>{
//   return res + curr;
// })
// console.log(out);

  let out = nums.reduce((res ,curr)=>{
    return res > curr ? res : curr;
  })
  console.log(out);