// 1.a Khai báo một hằng số number với giá trị 12
const number = 12;
// 1.b Khai báo một biến name với giá trị là "my number"
var name = "my number";
//1.c khai báo một biến isEven với giá trị là sai
var isEven = false;
//1.d Kiểm tra nếu number là số chẵn, gán lại isEven thành giá trị đúng
if (number % 2 == 0) {
    isEven = true
    console.log(isEven)
};
console.log ("------")
//2. 
var myName = "Alex";
myName = "Nagi";
console.log(myName);

//3.a Khai báo một hằng số với giá trị kiểu Number bất kỳ
const Number = -8;
if (Number >0){
    console.log("Giá trị bạn nhập là số dương")
}else if (Number<0){
    console.log("Giá trị bạn nhập là số âm")
}else if (Number==0){
    console.log("Giá trị bạn nhập là số 0")
};

//4 a. Khai báo chiều cao của bạn
var height = 167;
//4 b. Cân nặng lý tưởng 
var SoLeChieuCao = height % 100;
var expect = SoLeChieuCao * 9 / 10;
var max = SoLeChieuCao;
var min = SoLeChieuCao * 8 / 10;
console.log(expect, max , min);

