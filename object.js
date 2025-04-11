
// // declaration
// let userInfo = {  // object
//     name: "Rafiul",  // here name is property of its object
//     id: "011221086",
//     Age: 24,
//     language: ["Bangla", "English", "Hindi"]
// }
// console.log(userInfo.name);
// console.log(userInfo.language[0]);
// // for multiple user need multiple like this. Instead Use constructor





// here is a constructor or template
function userInfo(name, id, age, language){
    this.name=name;
    this.id=id;
    this.age=age;
    this.language=language;

    this.display = function(){  // remember the function expression?
        console.log(this.name);
        console.log(this.id);
        console.log(this.age);
        console.log(this.language);
    }
}
// create object
let person1 = new userInfo("Rafiul", "011221086", 24, "Bangla");
let person2 = new userInfo("Rafi", "011221086", 24, "Bangla");
let person3 = new userInfo("Rafiul", "011221086", 24, ["Bangla", "English", "Hindi"]);
console.log(person1.name);
console.log(person3.language[1]);

person3.display();