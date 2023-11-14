function multiplication2(num1, num2) {
    let result = 0;
    for(let i = 0; i < num2;i++){
        result += num1;
    }

    return result;
}


var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");

num1 = Number(num1);
num2 = Number(num2);

if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter a valid number");
} else {
    alert("The multiplication of " + num1 + " and " + num2 + " is " + multiplication2(num1, num2));
}