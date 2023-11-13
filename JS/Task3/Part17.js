/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function aveArray_For(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}


function aveArray_While(arr){
    let sum  = 0;
    i=0;
    while(i<arr.length){
        sum+=arr[i];
        i++;
    }
    return sum/arr.length;
}

var nums= [1,2,3,8,9];
console.log(aveArray_For(nums), aveArray_While(nums));