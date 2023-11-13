monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];

let age = prompt("What is your birth month?");
age = Number(age);

let result;

switch (age) {
    case 1 :
        result = monthes[0];
        break;
    case 2 :
        result = monthes[1];
        break;
    case 3 :
        result = monthes[2];
        break;
    case 4 :
        result = monthes[3];
        break;
    case 5 :
        result = monthes[4];
        break;
    case 6 :
        result = monthes[5];
        break;
    case 7 :
        result = monthes[6];
        break;
    case 8 :
        result = monthes[7];
        break;
    case 9 :
        result = monthes[8];
        break;
    case 10 :
        result = monthes[9];
        break;
    case 11 :
        result = monthes[10];
        break;
    case 12 :
        result = monthes[11];
        break;
    default:
        result = "Please enter a valid number";
        break;
}

alert(result);