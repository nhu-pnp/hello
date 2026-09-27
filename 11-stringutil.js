//1.trim() dùng để loại bỏ khoảng trắng
let str = " Javascript is   awesome     "
console.log(str);
console.log(str.trim());

//2.toLowerCase() va toUpperCase() chuyển đối tất cả ký tử trong chuỗi thành Thường/ Hoa
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//tạo 1 biến, và upper case giá trị str đó
console.log(str);
var m = str.toUpperCase();
console.log(m);

//3. include() trả về true/ false, dùng để kiểm tra chuỗi có chữa chuỗi con hay không
console.log(str.includes("awesome"));
console.log(str.includes("Awesome"));

//4. replace():dùng để thay thế 1 chuỗi bằng chuỗi khác
str = str.replace("awesome", "tired")
console.log(str)

//5. split(): chia 1 chuoi thanh 1 array cac chuoi con dua tren ki tu phan cach
let word = str.split(" ");
console.log(word);
console.log(word[1])
// hoặc là
console.log(str.split(" "));

const emails = "emailA@gmail.com, emailB@gmail.com";
let newEmail = emails.split(",");
console.log(newEmail);

let newEmail2 = emails.split("a");
console.log((newEmail2));
//6. substring(): trả về 1 phần của chuỗi, bắt đàu từ index được chỉ định hoặc đến cuối chuỗi

//7. index0f(): trả về vị trí xuất hiện đầu tiên của chuối, nếu không tìm thấy nó trả về -1
