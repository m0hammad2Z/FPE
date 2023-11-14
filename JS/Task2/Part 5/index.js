function area(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        alert("Please enter a positive number");
        return;
    }
    let result = 0;
    result = 0.5 * num1 * num2;
    return result;
}

// ) Write a function that takes the base and height of 
// a triangle and return its area

var width = prompt("Enter width");
var height = prompt("Enter height");

width = Number(width);
height = Number(height);

if (isNaN(height) || isNaN(width)) {
    alert("Please enter a valid numbers");
} else {
    alert("The area of the triangle is " + area(width, height));
}