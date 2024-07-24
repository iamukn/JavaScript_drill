/**
 * The Generator functions allows our function to return more that one return items
 * To return using the generator function, use the yield keyword 
 * The yield word can be used as many times as possible 
 * The can be created using the syntax function* func(){} or function *func() {}
 */

function* mathCalc(args) {
    yield args + 2;
    yield args * 2;
    yield args - 2;
    yield args / 2;
    return args ** 2;
}


let result = mathCalc(2);
let next = 0;
// accessing every member of the return value

while(true)  {
  next = result.next();
  if (next.done) {
      console.log(next.value);
      return;
  }
  console.log(next.value);
}
