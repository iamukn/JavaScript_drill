let user = {
  name: "John",
  age: 45,
  roles: {
    isAdmin: false,
    isEditor: true
  },
  toString () {
    return this.age
  }
};

jsonData = JSON.stringify(user);

console.log(jsonData);
console.log(typeof jsonData);

obj = JSON.parse(jsonData);
console.log(obj);
console.log(typeof obj);
