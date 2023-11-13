/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function minInArray_For(arr){
    var min = Infinity;
    for(let i = 0; i<arr.length; i++){
        min = arr[i] < min ? arr[i] : min;
    }

    return min;
}

function minInArray_While(arr){
    var min = Infinity;
    var ar2 = arr;
    while(a=ar2.pop()){
        min = a < min ? a : min;
    }

    return min;
}

var nums= [13,2,3,8,9];
console.log(minInArray_For(nums), minInArray_While(nums));