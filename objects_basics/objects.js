// creating an object usng the object constructor

let user = new Object();
console.log(typeof user);

name = 'fullname';

let newUser  = {
    [name]: "Ukaegbu",
    age: 30,
};


console.log(newUser);
delete newUser.age;
console.log(newUser);
