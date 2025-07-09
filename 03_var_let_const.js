console.log("var let const");
var a= 50;
var a = 60;
var b = "kismat";
var c = null;
var d = undefined;

{
    var b = "this";
    console.log(b);
}
console.log(b);

let k = "we";
{
    let k ="our";
    console.log(k)
}
console.log(k)  

//this is the difference between var and let

var i = 20;
var i = 40;   //this function of var may create errors 
// let j = 30;
// let j = 40;   //gives erros

let m = "20";
m = "kii"

var n = "30";
n = 40;


const animal= "cow";
// const animal = "dog";  //gives errors
 var z;
//  const hh; (gives erros) that means const should be initialized

const game = undefined;
// const game = kismat; error

const car = null;
// const car  = tesla; error
