// $0;
// $0 = $1;//cannot be done so dom colllection are read only

// $0.childNodes;
// $0.nextSibling;

console.log(document.body.firstChild)
a= document.body.firstChild;
console.log(a.parentNode)   //document
console.log(a.parentElement) //null
console.log(a.firstChild.nextSibling);
