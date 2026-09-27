class Student {
    //thuoc tinh chung
    name: string;
    city: string;
    age: number;

    //ham khoi tao 
    constructor(ten: string, thanhPho: string, tuoi: number){
        this.name = ten;
        this.city = thanhPho;
        this.age = tuoi;
    }
    //method
    sayMyName(){
        console.log(`My name is ${this.name}`);
    }

}

let student1 = new Student("Nhu", "HP", 24);
let student2 = new Student("Khang", "DN", 30);

console.log(student1);
console.log(student2);
console.log(student1.name);
student1.sayMyName();