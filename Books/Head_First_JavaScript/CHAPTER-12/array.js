var arr=new Array(3);
arr[0]=1;
arr[1]=3;
arr[2]=5;
console.log(arr.every(function(x){
        return(x%2 == 0);
}));