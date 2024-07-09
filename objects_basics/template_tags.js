function myTag(string,age) {
  let name = string[0];
  return `Hello ${name}, you are ${age} years old!`
}


let user = myTag`Ukaegbu ${30}`;

console.log(user);
