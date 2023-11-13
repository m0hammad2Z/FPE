drinks = {
    "Banana": 20,
    "Apple": 30,
    "Orange": 40,
    "Mango": 50,
    "Strawberry": 60
}

let drink = String(prompt("Enter your favorite drink"));

let found = false;

for(let key in drinks) {
    console.log(key)
    if(String(key).toLowerCase() == drink.toString().toLowerCase()) {
        alert(`The price of a ${drink} drink is ${drinks[key]} dollars`);
        found = true;
    }
}

if(!found) {
    alert("Sorry, we don't have that drink");
}