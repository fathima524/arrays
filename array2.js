let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let its = A.keys(); // Use the correct variable name

//console.log(its); // This will log the iterator object itself

for (let key of its) {
//    console.log(key); // This will log each key (index) of the array
}


//reduce method syntax
//arr.reduce(function()total,currentValue,currentIndex,arr),initialValue);

let abc=[10,20,30,40,50,60];

function myFun(total,num){
    return total + num;
}

function redFun(){
    console.log(abc.reduce(myFun));
}

redFun();