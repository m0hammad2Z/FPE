/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
function doubleValues(arr){
   let a = []
    arr.forEach(function(num){
         a.push(num * 2)
    })
    return a;
}


/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
function onlyEvenValues(arr){
    a = []
    arr.forEach(function(num){
        if(num % 2 === 0){
            a.push(num)
        }
    })
    return a;
}

/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
function showFirstAndLast(arr){
    a = []
    arr.forEach(function(str){
        a.push(str[0] + str[str.length - 1])
    })
    return a;
}

/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
function addKeyAndValue(arr,key,value){
    a = []
    arr.forEach(function(obj){
        obj[key] = value;
        a.push(obj);
    })
    return a;
}

/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

function vowelCount(str){
    str = str.toLowerCase().split("");
    var vowels = "aeiou";
    var obj = {};
    str.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            obj[letter] = obj[letter] + 1 || 1;
        }
    })
    return obj;
}

// ----------------test-----------------

/*
 * Exercise 1
 */
function testExercise1() {
    const input1 = prompt("Enter an array of numbers (comma-separated):");
    const arr1 = input1.split(',').map(Number);
    const result1 = doubleValues(arr1);
    console.log(result1);

    const input2 = prompt("Enter another array of numbers (comma-separated):");
    const arr2 = input2.split(',').map(Number);
    const result2 = doubleValues(arr2);
    console.log(result2);
}

/*
 * Exercise 2
 */
function testExercise2() {
    const input1 = prompt("Enter an array of numbers (comma-separated):");
    const arr1 = input1.split(',').map(Number);
    const result1 = onlyEvenValues(arr1);
    console.log(result1);

    const input2 = prompt("Enter another array of numbers (comma-separated):");
    const arr2 = input2.split(',').map(Number);
    const result2 = onlyEvenValues(arr2);
    console.log(result2);
}

/*
 * Exercise 3
 */
function testExercise3() {
    const input1 = prompt("Enter an array of strings (comma-separated):");
    const arr1 = input1.split(',');
    const result1 = showFirstAndLast(arr1);
    console.log(result1);

    const input2 = prompt("Enter another array of strings (comma-separated):");
    const arr2 = input2.split(',');
    const result2 = showFirstAndLast(arr2);
    console.log(result2);
}

/*
 * Exercise 4
 */
function testExercise4() {
    const inputArray = [
        { name: 'Elie' },
        { name: 'Tim' },
        { name: 'Matt' },
        { name: 'Colt' }
    ];

    const key = prompt("Enter the key:");
    const value = prompt("Enter the value:");
    
    const result = addKeyAndValue(inputArray, key, value);
    console.log(result);
}

/*
 * Exercise 5
 */
function testExercise5() {
    const input = prompt("Enter a string:");
    const result = vowelCount(input);
    console.log(result);
}



export let foreachTask4 = [ testExercise1, testExercise2, testExercise3, testExercise4, testExercise5 ]