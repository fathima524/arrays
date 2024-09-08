let a =[[1,2],[3,4],[5,6]];
let b = [[7,8],[9,10],[11,12]];
let c=[];

for(let i=0;i<a.length;i++){ 
    c[i]=[];
    for(let j=0;j<a[i].length;j++){
        c[i][j]=a[i][j]+b[i][j];
    }
}

console.log(c);
