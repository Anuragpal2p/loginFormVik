// Ques 1 => arrange in desending order and but condition is odd number should be cube and even in square
let arr = ["3", "8", "12", "5", "11"];


// console.log(convertnum)
const binary = arr.map( (e) => { 
    let numchnage = parseFloat(e)
  return  numchnage.toString(2);
})
console.log(binary);

// const decending = (arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let value = parseFloat(arr[i]);              // 1
//     if (value % 2) {
//       newArr.push(value ** 3);   //2
//     } else {
//       newArr.push(value * value); //2
//     }
//   }
//   const reverse = newArr.sort((a, b) => (b -a) ) //3
//   return reverse;
// };
// // console.log(decending(arr), "here");

// const Binary = arr.map((e) => {
//     return e.toString(2);
//   });
//   console.log("Binary", Binary);