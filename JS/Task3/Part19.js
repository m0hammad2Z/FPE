/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 8
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function repeatChar_For(str, char){
    let result = 0;
    for(let i = 0; i < str.length; i++){
        result += str[i] === char ? 1 : 0;
    }

    return result;
}

function repeatChar_While(str, char){
    let result = 0;
    let i = 0;
    while(i<str.length){
        result += str[i] === char ? 1 : 0;
        i++;
    }

    return result;
}

var string= "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar_For(string,"a"), repeatChar_While(string,"a"));
console.log(repeatChar_For(string,"z"), repeatChar_While(string,"z"));
