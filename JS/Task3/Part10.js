/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/ 

function indexOfArray(arr, index){
    return arr[index];
}

var nums= [1,2,3,8,9];
console.log(indexOfArray(nums,3));