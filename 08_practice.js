let a =prompt("enter age");
a = Number.parseInt(a);
if(a>=10 && a<=20){
console.log("do lies")
}
else{
    console.log("dont lies");

}



let age =prompt("enter age");
age = Number.parseInt(age);
switch(age)
{
    case 12:
        console.log( "your age is 12");
        break;
        
    case 20:
        console.log( "your age is 20");
        break;
        
   default:
        console.log( "your age is not known");
        break;
}



let ki =prompt("enter number");
ki = Number.parseInt(ki);
if(ki % 3 == 0 || ki % 2 == 0){
    console.log("divisible by 2 and 3");
}
else
{
    console.log("not divisible");
}
 let ages =10;
 console.log("you can",(ages<18)? "cannot drive" : "can drive");

//  OR

let agos = 10;
let k = (agos<=20)? "you canoot drive":"you can drive";
console.log(k);



