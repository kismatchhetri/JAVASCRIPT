let a =["kismat",1,false];

// console.log(a);
for(let k in a){
    console.log("name is",a[k])
}
console.log(a[2])

console.log(a.length);

a[1]=2;
console.log(a[1])

a[4]='kismat' //aading value in array
console.log(a.length)
console.log(a)
console.log(typeof a)


for(let i=0;i<Object.keys(a).length;i++)
{
    console.log("the name are",a[Object.keys(a)[i]])
}

//confuse read properly