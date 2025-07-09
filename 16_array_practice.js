let marks = [13,32,53,null,false,"not present"];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[6]);
console.log(marks.length);
console.log(typeof marks);
console.log(marks[2])  //53

marks[2]=4;

console.log(marks[2]);   //4

marks[6] = 6;
console.log(marks[6]);



// array methods

//tostring
//join
//pop   removes last element form array
//push  add new element at the top of the string
//shift  //removes first element and returns value
//unshift //add to the begininf of the array



let num = [1,2,3,4]

let b=num.toString(); ///convert array to string
console.log(b);

let c = num.join("_");  //join in between numbers
console.log(c , typeof c);
 

num.pop();
console.log(num);

let k = num.pop();
console.log(k); ///shows item that is poped out
console.log(num) 
console.log(num,k) 

let kismat = [55,54,66,99];
kismat.push(44);
console.log(kismat);

let mm = kismat.push(33);
console.log(kismat,mm);

let r = kismat.shift()

console.log(kismat,r)

kismat.unshift(44);
console.log(kismat);

//delete to delete
//concat //to join two array
//sort  //sorting alphabetically   //gets roasted mostly

let abhimat=[2,4,5,6,4]
let neon=[43,433,533,633,433]
console.log(abhimat);
delete abhimat[3];  ///length remains same
console.log(abhimat);
console.log(abhimat,neon);

let newconcat=abhimat.concat(neon);
console.log(newconcat);
console.log(abhimat,neon);

let prem = [9,99,999,999];
let radha=["kismat","neon"]
let newconcats=newconcat.concat(prem,radha);
console.log(newconcats);



 let alphabet=(a,b)=>{
    return a-b;  //b-a for decending order
 }

 
// function alphabet(a,b){
//     return a-b;
// }                              //function call another method

let ganesh=[333,329,2,4,9,5,6,33];
ganesh.sort();
console.log(ganesh) //gives sorting based on number eg 2 3 33 321 4
ganesh.sort(alphabet);
console.log(ganesh);

ganesh.reverse();
console.log(ganesh)



//splice(removes) and slice(shows)

// splice(start,end,numtoadd)
//slice slices out a piece from an array it cretes a new array
let gaman=[333,329,2,4,9,5,6,33];
gaman.splice(1,3,404,1001);
console.log(gaman);


let tila=[333,329,2,4,9,5,6,33];
// tila.slice(3);
// console.log(tila)  //as it donot modify orignal array so result will not be affected

let newtila =tila.slice(3);
console.log(newtila);

let newtila1 = tila.slice(2,5);
console.log(newtila1);
console.log(tila);

// loops array



