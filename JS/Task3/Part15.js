/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function removeFromArray_For(arr, ele){ 
    removedIndex = arr.indexOf(ele);
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(i != removedIndex){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}


function removeFromArray_while(arr, ele){
    removedIndex = arr.indexOf(ele);
    let newArr = [];

    i = 0;

    while(i < arr.length){
        if(i != removedIndex){
            newArr.push(arr[i]);
        }
        i++;
    }
    return newArr;
}

var nums= [1,2,3,8,9];
console.log(removeFromArray_For(nums, 8), removeFromArray_while(nums, 8));
