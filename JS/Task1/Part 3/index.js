//  equation that contain a π

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