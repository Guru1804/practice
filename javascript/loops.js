let a=92;
let b=30;

let c=document.getElementById("op");
let d=document.getElementById("op2");

if(a>b){
    c.textContent=`"${a}" is greater than "${b}"`;
}
else{
    c.textContent=`"${b}" is greater than  "${a}"`
}

/*using ternary operator*/

d.textContent=(a>b)?`"${a}" is greater than "${b}"`:`"${b}" is greater than "${a}"`


/*Array Creation */
let arr1=["a",true,1];
let arr2=Array(5);
console.log(arr1.length);
console.log(arr2.length);

console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());