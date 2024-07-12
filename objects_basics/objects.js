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
// property value


function info(name, age) {
  let user1 = {
    name,
    age,
  };
  return user1;
}


console.log(info(name='Ukaegbu', age=20));
