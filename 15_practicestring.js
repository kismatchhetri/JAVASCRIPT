console.log("har\"".length);


//Q2
let sentence = "kismat is my name";
let a = 'mys';
console.log(`the word ${a} ${sentence.includes(a)?'is':'is not'} in the sentence`)

console.log(sentence.includes(a));
console.log(sentence.startsWith("k"));
console.log(sentence.endsWith("k"));

let y ="HARKA";
console.log(y.toLocaleLowerCase());

// Q4

let str2="the amount is RS 200"
let amount=Number.parseInt(str2.slice("the amount is".length));
console.log(amount);
console.log(str2.slice(14));
console.log(typeof amount);


let strr="suresh";
// friend[3]="R"; //doesnot work because string is immutable;
console.log(strr);
console.log(strr.replace("sur","tur"));
console.log(strr)
