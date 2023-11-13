// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function sumArray_For(arr){
let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum; 
}

function sumArray_While(arr){
    let sum = 0;
    let ar2 = arr;

    while(a=ar2.pop()){
        sum += a;
    }

    return sum;
}

var nums= [1,2,3,8,9];
console.log(sumArray_For(nums), sumArray_While(nums));