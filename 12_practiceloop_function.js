// q1.marks of student in object using for loop

const marks = {
kis:200,
abh:300
}

// idea1
let k;
for(k in marks){
    console.log("marks of ",k,"are",marks[k]);
}

// idea2
for(i=0;i<Object.keys(marks).length;i++)
{
    console.log("marks of",Object.keys(marks)[i] ,"is",marks[Object.keys(marks)[i]]);
}

// q2
let ko = 4;
let j
while(j!=ko)
{
j=prompt("enter a number");
console.log("tryagain")
}
console.log("correct number");


// q4.mean using function

const mean=(a,b,c,d)=>{
    return ((a+b+c)/4)
}
console.log(4,5,6,5);
