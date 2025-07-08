
let runagain = true;
const canDrive = (age) =>
{
    return age>=18?true:false
}
while(runagain){
    let age = prompt("enter your age");
age = Number.parseInt(age);

if(age<0)
{
    console.error("please enter a valid age");
    break;
}

if(canDrive(age))
{
    alert("you can drive");
}
else{
    alert("you cannot drive")
}
runagain = confirm("do you want to play again")
}


// Q4.
let number = prompt("enter your number");
number = Number.parseInt(number);

if(number<4)
{
    location.href = "https://kismat.com.np"
}

//Q5

let color = prompt("enter page background color");
document.body.background.color = color;

