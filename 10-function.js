function sayHello(name) {
    console.log("Hello " + name);
}

sayHello('mia');
sayHello('khang');
console.log("------");
//In 2 lần: 1-> 10, sau Hello

function printNumber() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumber();
console.log("Hello");
printNumber();
console.log("Hello");

console.log("------");

//Parameter của function . Parameter = variable
function sayHello(name) {
    console.log(name);
}

sayHello('mia');
sayHello('khang');

console.log("------");
//in ra từ 1-->n , sao cho có thể linh động n = 5, n = 15, n =20
function number(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
number(5);
number(15);
number(20);
console.log("------");

//return value
var a = 5;
var b = 15;

//in ra số nào là số lớn nhất? vs: a =1 , b=2 => 2
if (a > b) {
    console.log(a)
} else {
    console.log(b)
};

var a = 10;
var b = 2;

if (a > b) {
    console.log(a)
} else {
    console.log(b)
};
console.log("------");

//bỏ vao function
// a= 25, b=15
// a =90, b=101
function max(a, b) {
    if (a > b) {
        console.log(a)
        return a; //dùng để lấy ra xử lý tiếp value a ở dưới thay vì dùng console.log
    } else {
        console.log(b)
        return b;
    }
};
max(25,15)
max(90, 101)
// in ra max * 2
var max1 = max (25, 15) ;
console.log(max1*2); // 25
var max1 = max (90, 101);
console.log(max1*2);

console.log("------");

//Viết function tên là sum, vs 2 tham số a và b, trả về a+b
function sum(a,b){
    console.log(a+b)
    return (a+b);
    console.log(a+b)
}
sum(20,30)
var Multiply = sum(20,30) *2
console.log(Multiply);