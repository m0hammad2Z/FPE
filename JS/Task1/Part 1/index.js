let operation = prompt("Enter an operation: +, -, *, /");
let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");

num1 = parseInt(num1);
num2 = parseInt(num2);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input");
}
else {
        switch (operation) {
            case "+":
                console.log(num1 + num2);
                AddHTML();
                break;
            case "-":
                console.log(num1 - num2);
                AddHTML();
                break;
            case "*":
                console.log(num1 * num2);
                AddHTML();
                break;
            case "/":
                console.log(num1 / num2);
                AddHTML();
                break;
            default:
                console.log("Invalid operation");
        }
}

function AddHTML() {
    let op = document.createElement("p");
    op.textContent = `Operation: (${operation})`;

    let n1 = document.createElement("p");
    n1.textContent = `Number 1: (${num1})`;

    let n2 = document.createElement("p");
    n2.textContent = `Number 1: (${num2})`;

    document.body.appendChild(op);
    document.body.appendChild(n1);
    document.body.appendChild(n2);
}