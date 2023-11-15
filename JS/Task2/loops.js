function testQuestion1() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let birthMonth = prompt("What is your birth month?");
    birthMonth = Number(birthMonth);

    let result;

    switch (birthMonth) {
        case 1:
            result = months[0];
            break;
        case 2:
            result = months[1];
            break;
        case 3:
            result = months[2];
            break;
        case 4:
            result = months[3];
            break;
        case 5:
            result = months[4];
            break;
        case 6:
            result = months[5];
            break;
        case 7:
            result = months[6];
            break;
        case 8:
            result = months[7];
            break;
        case 9:
            result = months[8];
            break;
        case 10:
            result = months[9];
            break;
        case 11:
            result = months[10];
            break;
        case 12:
            result = months[11];
            break;
        default:
            result = "Please enter a valid number";
            break;
    }

    alert(result);
}

function testQuestion2() {
    let number = 1;
    let result = "";
    for (let i = 1; i <= 4; i++) {
        for (let x = 0; x < i; x++) {
            result += number + " ";
            number++;
        }
    }
    alert(result);
}

function testQuestion3() {
    let result = "";
    for (let i = 1; i <= 1000; i++) {
        if (i % 13 === 0) {
            result += i + " ";
        }
    }
    alert(result);
}

function multiplication2(num1, num2) {
    num1 = prompt("Enter first number");
    num2 = prompt("Enter second number");

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
    } else {
        alert("The multiplication of " + num1 + " and " + num2 + " is " + multiplication2Helper(num1, num2));
    }

    function multiplication2Helper(num1, num2) {
        let result = 0;
        for (let i = 0; i < num2; i++) {
            result += num1;
        }
        return result;
    }
}

function testQuestion5() {
    function area(num1, num2) {
        if (num1 < 0 || num2 < 0) {
            alert("Please enter positive numbers");
            return;
        }
        let result = 0.5 * num1 * num2;
        return result;
    }

    let width = prompt("Enter width");
    let height = prompt("Enter height");

    width = Number(width);
    height = Number(height);

    if (isNaN(height) || isNaN(width)) {
        alert("Please enter valid numbers");
    } else {
        alert("The area of the triangle is " + area(width, height));
    }
}

function testQuestion6() {
    let pandigit = Number(prompt("Enter a number"));

    if (isNaN(pandigit)) {
        alert("Please enter a valid number");
    } else {
        alert(pandigital(pandigit));
    }

    function pandigital(num) {
        let map = new Map();
        let result = false;
        while (num > 0) {
            let digit = num % 10;
            map.set(digit, true);
            num = Math.floor(num / 10);

            console.log(map.size);
            if (map.size === 10) {
                result = true;
                break;
            }
        }

        return result;
    }
}

function testQuestion7() {
    let drinks = {
        "Banana": 20,
        "Apple": 30,
        "Orange": 40,
        "Mango": 50,
        "Strawberry": 60
    };

    let drink = String(prompt("Enter your favorite drink"));

    let found = false;

    for (let key in drinks) {
        if (key.toLowerCase() === drink.toLowerCase()) {
            alert(`The price of a ${drink} drink is ${drinks[key]} dollars`);
            found = true;
        }
    }

    if (!found) {
        alert("Sorry, we don't have that drink");
    }
}

function testQuestion8() {
    function fullName(firstName, lastName) {
        return firstName + " " + lastName;
    }

    let fName = prompt("Enter your first name");
    let lName = prompt("Enter your last name");

    alert(fullName(fName, lName));
}

export let loopsTask2 = [testQuestion1, testQuestion2, testQuestion3, multiplication2, testQuestion5, testQuestion6, testQuestion7, testQuestion8];
