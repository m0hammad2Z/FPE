/*
Instructions: 
 - You should solve all these questions using .map() function 
*/


/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
function doubleNumbers(arr){
    return arr.map(function(num){
        return num * 2;
    })  
}
  
  /*
   * Exercise 2 : 
   * 
   * Take an array of numbers and make them strings
   *
   * Test Case: 
   *
   * console.log(stringItUp([2, 5, 100]));
   * 
   * Result:
   * ["2", "5", "100"]
  */
  
  function stringItUp(arr){
    return arr.map(function(num){
        return num.toString();
    })
  }
  
  
  /*
   * Exercise 3:  
   * 
   * Capitalize each of an array of names
   *
   * Test Case: 
   *
   * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
   * 
   * Result:
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
  */
  
  function capitalizeNames(arr){
    return arr.map(function(name){
        return name.charAr(0).toUpperCase() + name.slice(1).toLowerCase();
    })
  }
  
  /*
   * Exercise 4:  
   * 
   * Make an array of strings of the names
   *
   * Test Case: 
   *
   * console.log(namesOnly([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   *   ])); 
   * 
   * Result:
   *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  */
  
  function namesOnly(arr){
    return arr.map(function(p){
        return p.name;
    })
  }
  /*
   * Exercise 5:  
   * 
   * Make an array of strings of the names saying whether or not they can go to The Matrix
   *
   * Test Case: 
   *
   * console.log(makeStrings([
   *    {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ]));  
   * 
   * Result:
   * 
   * ["Angelina Jolie can go to The Matrix", 
   * "Eric Jones is under age!!", 
   * "Paris Hilton is under age!!", 
   * "Kayne West is under age!!", 
   * "Bob Ziroll can go to The Matrix"]
   *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
   */
  
  function makeStrings(arr){
    return arr.map(function(p){
        return p.age > 18 ? p.name + " can go to the matrix" : p.name + "is under age!";
    })
  }
  
  /*
   * Exercise 6:  
   * 
   * Make an array of the names in h1s, and the ages in h2s
   *
   * Test Case: 
   *
   * console.log(readyToPutInTheDOM([
   *   {
   *       name: "Angelina Jolie",
   *       age: 80
   *   },
   *   {
   *       name: "Eric Jones",
   *       age: 2
   *   },
   *   {
   *       name: "Paris Hilton",
   *       age: 5
   *   },
   *   {
   *       name: "Kayne West",
   *       age: 16
   *   },
   *   {
   *       name: "Bob Ziroll",
   *       age: 100
   *   }
   * ])); 
   * 
   * Result:
   * 
   * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
   * "<h1>Eric Jones</h1><h2>2</h2>", 
   * "<h1>Paris Hilton</h1><h2>5</h2>", 
   * "<h1>Kayne West</h1><h2>16</h2>", 
   * "<h1>Bob Ziroll</h1><h2>100</h2>"]
   */
  
  function readyToPutInTheDOM(arr){
    return arr.map((p) => "<h1>" + p.name + "</h1>" + "<h2>" + p.age + "</h2>")
  }
  
  
  
  
  /*
  * Exercise 7:
  * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
  *
  * Test Cases:
  *   Test Case 1:  doubleValues([1,2,3]) 
  *   Test Case 2:  doubleValues([1,-2,-3])  
  *
  * Result:
  * Test Case 1: [2,4,6] 
  * Test Case 2: [2,-4,-6]
  */
  
  function doubleValues(arr){
      arr.map((val) => val *2);
    }
    
    /*
    * Exercise 8:
    * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
    *
    *
    * Test Cases :
    *   Test Case 1:  valTimesIndex([1,2,3])  
    *   Test Case 2:  valTimesIndex([1,-2,-3]) 
    * 
    * Result
    * Test Case 1: [0,2,6]
    * Test Case 2: [0,-2,-6]
    */
    
    function valTimesIndex(arr){
        return arr.map((val, idx) => val * idx)
    }
    
    /*
    * Exercise 9:
    * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
    * of that key in each object.
    * 
    * Test Case:
    * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
    * 
    * Result:
    * ['Elie', 'Tim', 'Matt', 'Colt']
    */
    
    function extractKey(arr, key){
        return arr.map((val) => val[key]) 
    }
    
    /*
    * Exercise 10:
    * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
    * 
    * Examples:
    * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
    */
    
   function extractFullName(){
        return arr.map((val) => val.first + " " + val.last); 
   }

  /*
 * Exercise 1
 */
function testExercise1() {
  const result = doubleNumbers([2, 5, 100]);
  console.log(result);
}

/*
* Exercise 2
*/
function testExercise2() {
  const result = stringItUp([2, 5, 100]);
  console.log(result);
}

/*
* Exercise 3
*/
function testExercise3() {
  const result = capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);
  console.log(result);
}

/*
* Exercise 4
*/
function testExercise4() {
  const result = namesOnly([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]);
  console.log(result);
}

/*
* Exercise 5
*/
function testExercise5() {
  const result = makeStrings([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]);
  console.log(result);
}

/*
* Exercise 6
*/
function testExercise6() {
  const result = readyToPutInTheDOM([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]);
  console.log(result);
}

/*
* Exercise 7
*/
function testExercise7() {
  const result = doubleValues([1, 2, 3]);
  console.log(result);
}

/*
* Exercise 8
*/
function testExercise8() {
  const result = valTimesIndex([1, 2, 3]);
  console.log(result);
}

/*
* Exercise 9
*/
function testExercise9() {
  const result = extractKey([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'name');
  console.log(result);
}

/*
* Exercise 10
*/
function testExercise10() {
  const result = extractFullName([
      { first: 'Elie', last: "Schoppik" },
      { first: 'Tim', last: "Garcia" },
      { first: 'Matt', last: "Lane" },
      { first: 'Colt', last: "Steele" }
  ]);
  console.log(result);
}

export let mappingTask4 = [testExercise1, testExercise2, testExercise3, testExercise4, testExercise5, testExercise6, testExercise7, testExercise8, testExercise9, testExercise10 ];