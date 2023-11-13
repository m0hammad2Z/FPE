/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray_For(arr){
    let result =''
    for(let i = 0; i<arr.length; i++){
        result = arr[i].length < result.length ? arr[i] : result;
    }

    return result;
}

function shorterInArray_While(arr){
    let result = 0;
    let i = 0;
    while(i<arr.length){
        result = arr[i].length < result.length ? arr[i] : result;
        i++;
    }

    return result;
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(shorterInArray_For(strings), shorterInArray_While(strings));