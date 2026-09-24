const arr1 = [-10, 15.8, 20]; //có 3 phan tu
const arr2 = ["Playwright","Viet Nam"]; //có 2 phan tu
const mixedArr = ["Playwright", 10, true, null, {id: 1, name: "Alex"}]; //có 5 phan tu

//in ra mang
console.log(arr1);
console.log(arr2);
console.log(mixedArr);

//Do dai mang 
console.log(arr1.length);
console.log(arr2.length);
console.log(mixedArr.length);

//Truy xuat phan tu mang
console.log(arr1[0]);

//Them phan tu dau mang
arr1.unshift(30); 
console.log(arr1); // [30, -10, 15.8, 20]

console.log(arr1[0]); // 30
//Xóa phan tu dau mang
arr1.shift();
console.log(arr1); //[-10, 15.8, 20]

//Thêm phan tu vao cuoi mang
arr1.push(90);
console.log(arr1); // [-10, 15.8, 20, 90]

//Xoa phan tu o cuoi mang
arr1.pop();
console.log(arr1); // [-10, 15.8, 20]

/**
Chỉ nên khai báo 1 kiểu dữ liệu trong 1 mảng
 */