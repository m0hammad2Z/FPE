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