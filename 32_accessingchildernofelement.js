console.log(document.body.firstChild); //also counts text node
console.log(document.body.lastChild); 
console.log(document.body.childNodes);

let arr = Array.from(document.body.childNodes)
console.log(arr);