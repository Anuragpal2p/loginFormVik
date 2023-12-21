// -------------------Map //----------------------

const arr = [5, 1, 3, 2, 6];

//Double - [10,2,6,12]
const output = arr.map((item) => {
  return item * 2;
});
console.log("Double", output);

//Triple - [15,3,9,6,18]
const Triple = arr.map((ele) => {
  return ele * 3;
});
console.log("triple", Triple);

// Binary - ["101","1", "11","10","110"];
const Binary = arr.map((e) => {
  return e.toString(2);
});
console.log("Binary", Binary);

// -----------------------  Filter -------------------
// Filter is used to filter the values inside the array

const arrfilter = [5, 1, 3, 2, 6];

// filter odd value

const outputfil = arr.filter((x) => {
  return x % 2;
});
console.log("Odd", outputfil);

// filter odd value

const filtereven = arr.filter((x) => {
  return x % 2 == 0;
});
console.log("Even", filtereven);

// filter greater than 4

const greatethan4 = arr.filter((x) => {
  return x > 4;
});
console.log("greatethan 4", greatethan4);

// =--------------------------------Reduce Funcction
// It is used at a place where you have to take all the elements of the array and come up with the single value out of them
const reducearr = [5, 1, 3, 2, 6];

const findSum = (reducearr) => {
  let sum = 0;
  for (let i = 0; i < reducearr.length; i++) {
    sum = sum + reducearr[i];
  }
  return sum;
};
console.log(findSum(reducearr), "sum");

// with help of Reduce function
const reduceMethod = reducearr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log("reduceMethod", reduceMethod);

// Find Maximum value inside array
const givenarr = [1, 4, 5, 12, 89, 90];

const maxValue = (givenarr) => {
  let max = 0;
  for (let i = 0; i < givenarr.length; i++) {
    if (givenarr[i] > max) {
      max = givenarr[i];
    }
  }
  return max;
};
console.log("max", maxValue(givenarr));


// by reduce method 

const byReduce =  () => givenarr.reduce((max, curr) => {
    if(curr > max){
        max = curr
    }
    return max
})
console.log(byReduce(givenarr), "maxByReduce")