// if
const a =6;

if (a>5) {
    console.log("a lớn hơn 5");
}

//if else
const a1 =6;
if (a1>5) {
    console.log("a1 lớn hơn 5")
}else {
    console.log("a1 nhỏ hơn hoặc bằng 5");
}

//Điều kiện if..else if...
const score = 7
    // 0-5: yeu
    //5-7 :TB
    //7-9: kha
    //9-10:gioi
if (score<5){
    console.log("hoc sinh yeu")
}else if (5<=score && score<7){
    console.log("hoc sinh TB")
}else if (7<=score && score<9){
    console.log("hoc sinh kha")
}else if (9<=score && score<=10){
    console.log("hoc sinh gioi")
} // hoc sinh TB