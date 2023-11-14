pandigit = Number(prompt("Enter a number"));

if(isNaN(pandigit)) {
    alert("Please enter a valid number");
}
else{
    alert(pandigital(pandigit));
}

function pandigital(num) {
    let map = new Map();
    let result = false;
    while(num > 0) {
        let digit = num % 10
        map.set(digit, true);
        num = Math.floor(num / 10);

        console.log(map.size);
        if(map.size == 10) {
            result = true;
            break;
        }
    }
    
    return result;
}
