alert("enter value of a");
let a = prompt("enter a", "999"); //default value 999
// document.write(a);
a = Number.parseInt(a);
let write = confirm("do you want to write it to the page");
alert("you enter a type of a " + (typeof a));
if(write){
    document.write(a)
}
else(
    document.write("Please allow me to write")
)



