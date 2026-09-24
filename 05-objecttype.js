const student = {
    'id':1,
    'name':'Alex',
    'age':'18'
};
//loi ich
const sv1 = {
    'id' : 3,
    'name' : "Alex",
    'age' : 18
}

const sv2 = {
    'id' : 2,
    'name': "Nagi",
    'age' :18,
    //thuộc tính trong thuộc tính
    'address': {
        province: "Ha noi",
        isCapital: true,
        country: "Viet Nam",
        contact: {
            email: "mia@gmail.com",
            phonenumber: "08888",
        }
    }
}
sv2.address.province = "Đa Nang";
console.log(sv2.address.province);

console.log(sv2.address.province);
console.log(sv2.address.country);
console.log(sv2.address.contact.email);
// thêm thuộc tính
sv2.citizen = 'Singapore';
console.log(sv2);
// xóa thuộc tính
delete sv2.citizen;
console.log(sv2);
let sv3 = {
    'id' : 3,
    'name': "kin",
    'age' :19
}
console.log(`- Thông tin SV1: ${sv1.id}, ${sv1.name}, ${sv1.age}`);
console.log(`- Thông tin SV2: ${sv2.id}, ${sv2.name}, ${sv2.age}`);
console.log(`- Thông tin SV3: ${sv3.id} , ${sv3.name} , ${sv3.age}`);

/*  không thể thay đổi giá trị của hằng số , VD:
const student ={id: 10,name : "Alex"};
student = {id: 11, name: "Kin"};
*/

/* Không nên có dấu cách giữa các hằng, biến và thuộc tính, VD:
const student new = {id: 10, 'my name': "Alex"}
*/