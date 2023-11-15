// 1
function operationOnTwoNumbers(){
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
                    // AddHTML();
                    break;
                case "-":
                    console.log(num1 - num2);
                    // AddHTML();
                    break;
                case "*":
                    console.log(num1 * num2);
                    // AddHTML();
                    break;
                case "/":
                    console.log(num1 / num2);
                    // AddHTML();
                    break;
                default:
                    console.log("Invalid operation");
            }
    }
}


// 2
function gradeFun(){
    var m = prompt("Enter your mark");
    m = parseInt(m);

    let textResult = document.createElement("p");
    document.body.appendChild(textResult);

    if (isNaN(m)) {
    console.log("Invalid input");
    textResult.textContent = "Invalid input";
    } else {
    textResult.textContent = `Grade = ${getGrade(m)}`;
    console.log(getGrade(m));
    }


    function getGrade(mark) {
    switch (true) {
        case mark < 50:
            return "FAIL";
        case mark >= 50 && mark <= 59:
            return "D";
        case mark >= 60 && mark <= 69:
            return "C";
        case mark >= 70 && mark <= 79:
            return "B";
        case mark >= 80 && mark <= 89:
            return "A";
        case mark >= 90 && mark <= 100:
            return "A+";
    }

    return "Invalid mark";
    }
}

// 3
function containPI(){
    const pi = Math.PI;
    const radius = prompt("Enter the radius of the circle: ");

    let textResult = document.createElement("p");
    document.body.appendChild(textResult);
    if(isNaN(radius)) {
        console.log("Invalid input");
        textResult.textContent = "Invalid input";
    }else{
        const area = pi * radius * radius;
        console.log(area);
        textResult.textContent = `Area = ${area}`;
    }
}

// 4
function helloGoodby(){
    let x = prompt("Enter a number");
    let y = prompt("Enter another number");

    x = parseInt(x);
    y = parseInt(y);

    if (isNaN(x) || isNaN(y)) {
    console.log("Invalid input");
    }else{
    let p = document.createElement("p");
    document.body.appendChild(p);


    if (x > y) {
        var result = `Hello World \n x: ${x} \n y: ${y}`
        console.log(result);
        alert(result);
        p.textContent = result;
    }
    else {
        var result = `Goodbye \n x: ${x} \n y: ${y}`
        console.log(result);
        alert(result);
        p.textContent = result;
    }
    }
}

export let task1 = [operationOnTwoNumbers, gradeFun, containPI, helloGoodby]