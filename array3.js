
var game = [[12,13],
            [20,30],
            [40,50]];


var arr_2d = new Array(5); 
for(var i = 0 ; i<arr_2d.length ; i++){
    arr_2d[i] = new Array(5);
}
console.log(arr_2d);




function twoDimentionArray(rows, cols) {

    let arr = [] ;

    //creat 2d array 
    for(let i=0 ; i<rows ; i++){
        for(let j=0 ; j<cols;j++) {
            arr[i]=[];

        }
    }


    //inserting element in the array 
    for(let i=0 ; i<rows ; i++){
        for(let j=0 ; j<cols/2 ; j++ ){
              arr[i][j] = j;
        }
    }
    return arr;
}

const result = twoDimentionArray(2,3);
console.log(result );


let student = [['fathima', 23], ['sadikha', 25]];
for(i=0;i<student.length;i++){
    student[i]=[];
    for(j=0;j<student.length;j++){
        student[i][j]=[];
    }
}
console.log( student);

