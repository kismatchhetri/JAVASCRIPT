
console.log("conditional operators")

let a = prompt("what is your age");
// a is always string;
a = Number.parseInt(a); // to make it to integer
console.log(typeof a);
if(a<20)
{
//    alert("you cannot vote");
   console.log("you cannot vote");

}else if(a>=20 && a<80)
{
    console.log("you can vote");

}
else 
{
    console.log("you are old");
}

console.log("done");


// e.g

console.log("my practice");
let salary = prompt("enter your salary");
salary=Number.parseInt(salary);
if(salary> 200){
    console.log("good");
}else{

    console.log("bad");
};


//switch in js
let day = prompt("enter day");
switch(day){
    case "1":
        console.log("hi sunday");
    break;

    case "2":
        console.log("hi monday");
        break;
    
    default:
        console.log("no day")
}


// ternary operator


let agee = 10;
console.log("you can", ((agee<20)? "not drrive":"drive"));
