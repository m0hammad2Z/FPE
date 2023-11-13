/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr){
    if(arr.length % 2 == 0){
        return arr[arr.length / 2 - 1] + " and " + arr[arr.length / 2];
    } else {
        return arr[Math.floor(arr.length / 2)];
    }
}

console.log(middleOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(middleOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));