/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndex(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(Math.pow(arr[i], i));
    }
    return newArr;
}

function powerElementIndex_While(arr){
    let newArr = [];
    let i = 0;
    while(i < arr.length){
        newArr.push(Math.pow(arr[i], i));
        i++;
    }
    return newArr;
}

var nums= [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums), powerElementIndex_While(nums));
