// console.log("hellow world");

// // Variables

// var name = "viaks";

// console.log(name);

// console.log(typeof name);

// var name = "tushar"; // redecleration
// console.log(name);

// //let

// let agee = 22;

// console.log(agee);

// //datatypes

// var name ='vikas';
// console.log(typeof(name));

// var age = 22;
// console.log(typeof(agee));

// let s={
//     name:"amit"



// }

// console.log(s);

// var a=5;
// var b=3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a++);
// console.log(a--);


// let x = 100 , y = 20 , z;
//       if (x<15){
//         z = 30;
//       }

//       console.log(x,y,z)


// let year=2024;
// if((year%4==0 && year%100!=0)||(year%400==0)){
//     console.log("Leap year")
// }
// else{
//     console.log("Not a leap Year")
// }

// let year = 2024;
// //leap year using ternary operator
// let leapYear=(year%4==0 && year%100!=0)||(year%400==0)?"Leap Year":"Not a Leap Year";
// console.log(leapYear);

// // ternary using nested;

// let leapYearNested=(year%4==0)?((year%100!=0)?"Leap Year":((year%400==0)?"Leap Year":"Not a Leap Year")):"Not a Leap Year";
// console.log(leapYearNested);

let x=4;

switch(x){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Number");
}

let operation="+";
let num1=10;
let num2=20;

switch(operation){
    case "+":
        console.log(num1+num2);
        break;
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("Invalid Operation");
}


