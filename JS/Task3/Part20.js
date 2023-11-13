/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength_For(arr){
    let result = [];
    for(let i = 0; i<arr.length; i+=2){
        if(arr[i].length % 2 == 1){
            result.push(arr[i]);
        }
    }

    return result;
}

function evenIndexOddLength_While(arr){
    let result = [];
    let i = 0;
    while(i< arr.length){
        if(arr[i].length % 2 == 1){
            result.push(arr[i]);
        }

        i+=2;
    }
}


var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]

console.log(evenIndexOddLength_For(strings))
console.log(evenIndexOddLength_While(strings))