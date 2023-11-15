/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`
}

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age) {
    return `Your doggie is ${age * 7} years old in dog years!`
}


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amountPerDay) {
    return `You will need ${amountPerDay * 365 * (100 - age)} cups of tea to last you until the ripe old age of 100`
}

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name) {
    return `Hello ${name}`
}


/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}


// 1. x is not defined
// 2. 7 is number
// 3. x is not defined


/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x) {
    return 2 * x;
}

function double2(x) {

    return 2 * x;
}

function double3(x) {
    return 2 * x;
}


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(x) {
    return x * x * x;
}


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(x, y) {
    return x * y;
}

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age) {
    if (age >= 20) {
        return "yes you can"
    } else {
        return `please come back after ${20 - age} years to get one`
    }
}


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(str1, str2) {
    return str1.length == str2.length;
}

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(x, y) {
    return Math.max(x, y);
}


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(x, y) {
  return Math.min(x, y);
}



/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(str1, str2, str3, str4, str5) {
  return Math.min(str1.length, str2.length, str3.length, str4.length, str5.length);
}

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(str1, str2, str3, str4) {
  return Math.max(str1.length, str2.length, str3.length, str4.length);
}

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(x) {
    return x % 2 == 0;
}


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(x) {
    return x % 2 != 0;
}


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(x) {
    return Math.abs(x);
}

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(x1, x2, x3, x4, x5) {
    return (x1 + x2 + x3 + x4 + x5) / 5;
}

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber() {
    return Math.random();
}

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(x, y) {
    return Math.random() * (y - x) + x;
}


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(x) {
    if (x >= 95) {
        return "A"
    } else if (x >= 85) {
        return "B"
    } else if (x >= 70) {
        return "C"
    } else if (x >= 50) {
        return "D"
    } else {
        return "F"
    }
}


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let cntr = 0;
function counter() {
    return ++cntr;
}

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter(){
  cntr = 1;
  return cntr;
}


/*
1
*/
function testQuestion1() {
    const result = tellFortune('software engineer', 'Jordan', 'Alice', 3);
    console.log(result);
    alert(result);
}

/*
2
*/
function testQuestion2() {
    const result = calculateDogAge(1);
    console.log(result);
    alert(result);
}

/*
3
*/
function testQuestion3() {
    const result = calculateSupply(30, 3);
    console.log(result);
    alert(result);
}

/*
4
*/
function testQuestion4() {
    const result = greet("Adam");
    console.log(result);
    alert(result);
}

/*
5
*/
function testQuestion5() {
    // The correct answer is 3. x is not defined
    console.log("Question 5: " + "3. x is not defined");
    alert("Question 5: " + "3. x is not defined");
}

/*
6
*/
function testQuestion6() {
    const result1 = double1(5);
    const result2 = double2(5);
    const result3 = double3(5);
    console.log(result1, result2, result3);
    alert(result1);
    alert(result2);
    alert(result3);
}

/*
7
*/
function testQuestion7() {
    const result = cube(4);
    console.log(result);
    alert(result);
}

/*
8
*/
function testQuestion8() {
    const result = multiply(3, 4);
    console.log(result);
    alert(result);
}

/*
9
*/
function testQuestion9() {
    const result1 = canIGetADrivingLicense(21);
    const result2 = canIGetADrivingLicense(17);
    const result3 = canIGetADrivingLicense(20);
    console.log(result1, result2, result3);
    alert(result1);
    alert(result2);
    alert(result3);
}

/*
10
*/
function testQuestion10() {
    const result1 = sameLength("tree", "clue");
    const result2 = sameLength("tree", "car");
    console.log(result1, result2);
    alert(result1);
    alert(result2);
}

/*
11
*/
function testQuestion11() {
    const result = largerNubmer(5, 6);
    console.log(result);
    alert(result);
}

/*
12
*/
function testQuestion12() {
    const result = smallerNubmer(8, 6, 7);
    console.log(result);
    alert(result);
}

/*
13
*/
function testQuestion13() {
    const result = shorterString("air", "school", "car", "by", "github");
    console.log(result);
    alert(result);
}

/*
14
*/
function testQuestion14() {
    const result = longerString("air", "school", "car", "github");
    console.log(result);
    alert(result);
}

/*
15
*/
function testQuestion15() {
    const result = isEven(1);
    console.log(result);
    alert(result);
}

/*
16
*/
function testQuestion16() {
    const result = isOdd(4);
    console.log(result);
    alert(result);
}

/*
17
*/
function testQuestion17() {
    const result = positive(-5);
    console.log(result);
    alert(result);
}

/*
18
*/
function testQuestion18() {
    const result = fullName("Adam", "McCallen");
    console.log(result);
    alert(result);
}

/*
19
*/
function testQuestion19() {
    const result = average(1, 2, 3, 4, 5);
    console.log(result);
    alert(result);
}

/*
20
*/
function testQuestion20() {
    const result = randomNumber();
    console.log(result);
    alert(result);
}

/*
21
*/
function testQuestion21() {
    const result = randomBetweenNumbers(1, 8);
    console.log(result);
    alert(result);
}

/*
22
*/
function testQuestion22() {
    const result = scoreInUniversty(96);
    console.log(result);
    alert(result);
}

/*
23
*/
function testQuestion23() {
    const result = counter();
    console.log(result);
    alert(result);
}

/*
24
*/
function testQuestion24() {
    const result1 = counter();
    const result2 = counter();
    const result3 = counter();
    console.log(result1, result2, result3);

    const resetResult = resetCounter();
    console.log(resetResult);
    alert(resetResult);
}

export let functionsTask2 = [testQuestion1, testQuestion2, testQuestion3, testQuestion4, testQuestion5, testQuestion6, testQuestion7, testQuestion8, testQuestion9, testQuestion10, testQuestion11, testQuestion12, testQuestion13, testQuestion14, testQuestion15, testQuestion16, testQuestion17, testQuestion18, testQuestion19, testQuestion20, testQuestion21, testQuestion22, testQuestion23, testQuestion24]