// Write an if statement to display "Hello World" if x is 
// greater than y, otherwise alert "Goodbye".
// y and x depend on prompt the result should appear in 
// alert,console.log, HTML page.

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