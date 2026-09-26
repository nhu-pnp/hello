const arr = [1,2,3,4,9];
//for (<khoi tao>; <điều kiện lặp>; <điều kiện thay đổi>)
for (let i = 0; i<arr.length; i++){ //i<4 //i=i-1
    console.log(i);//4 3 2 1 0 -1
    console.log(arr[i]); //9 4 3 2 1
    console.log("- - - -");
}

//expect:1,2,3,4,9
//arr.length : là số phần tử, đang có 5 phần tử