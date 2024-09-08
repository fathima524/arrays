let names=[];
//console.log(names);
let names2=['fathima','hijaab','irfan'];
//console.log(names2);
let subjects=new Array('sub1','sub2');//creating the array using the constructor
//console.log(subjects);

let arr=[3];
arr[0]='f';
arr[1]='a';
arr[2]='t';
console.log(arr);
console.log(arr[1]);
console.log(arr[arr.length - 1] );

//push and pop methods

let arr2=[];
arr2.push("fathima");
console.log(arr2);
arr2[1]='hijaab';
arr2[2]='irfan';
console.log(arr2);
arr2.unshift("sadikha");
console.log(arr2);

console.log(arr2.pop());
console.log(arr2.shift());
console.log(arr2.splice());

//SEARCHING AN ELEMENT USING INCLUDES METHOD
console.log(arr2.includes('irfan',0));//its a booolean method that will help u to search elements from the given boolean value
