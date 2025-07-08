const changeBgRed = () =>{
    document.body.firstElementChild.style.background= "red";
}
changeBgRed();

let b = document.body;
console.log("first child of b is",b.firstChild);
console.log("first child of b is",b.firstElementChild);

